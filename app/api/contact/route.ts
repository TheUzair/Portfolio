import { NextRequest, NextResponse } from 'next/server';

import { contactSchema } from '@/lib/contact/schema';
import {
  ADMIN_EMAIL,
  GMAIL_USER,
  isEmailConfigured,
  transporter,
} from '@/lib/contact/transporter';
import {
  buildAdminEmailHtml,
  buildAdminEmailText,
} from '@/lib/contact/templates/admin';
import {
  buildVisitorEmailHtml,
  buildVisitorEmailText,
} from '@/lib/contact/templates/visitor';
import { createLogger } from '@/lib/logger';
import { createRateLimiter, getClientIp } from '@/lib/rateLimit';

const logger = createLogger('contact/route');

const checkRateLimit = createRateLimiter({
  limit: 5,
  windowMs: 60 * 60 * 1000, // 1 hour
});

export async function POST(request: NextRequest) {
  const ip = getClientIp(request.headers);

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const { firstName, lastName, email, budget, message } = parsed.data;

  logger.log('Incoming submission', { firstName, lastName, email, budget, ip });

  if (!isEmailConfigured) {
    logger.error('Aborting send — Gmail SMTP credentials not configured.');
    return NextResponse.json(
      { error: 'Email service is not configured on the server.' },
      { status: 500 },
    );
  }

  try {
    const receivedAt = new Date();

    // 1) Notify admin of the new inquiry
    const adminInfo = await transporter.sendMail({
      from: `"Portfolio Contact" <${GMAIL_USER}>`,
      to: ADMIN_EMAIL,
      replyTo: `"${firstName} ${lastName}" <${email}>`,
      subject: `🔔 New inquiry from ${firstName} ${lastName} — ${budget}`,
      text: buildAdminEmailText({ firstName, lastName, email, budget, message, ip, receivedAt }),
      html: buildAdminEmailHtml({ firstName, lastName, email, budget, message, ip, receivedAt }),
      headers: { 'X-Entity-Ref-ID': `portfolio-${Date.now()}` },
    });
    logger.log('✅ Admin email sent', { messageId: adminInfo.messageId });

    // 2) Send confirmation to the visitor
    const visitorInfo = await transporter.sendMail({
      from: `"Mohd Uzair" <${GMAIL_USER}>`,
      to: email,
      replyTo: `"Mohd Uzair" <${GMAIL_USER}>`,
      subject: `Thanks ${firstName} — I've received your message ✨`,
      text: buildVisitorEmailText({ firstName, budget, message }),
      html: buildVisitorEmailHtml({ firstName, budget, message }),
    });
    logger.log('✅ Visitor email sent', { messageId: visitorInfo.messageId });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: unknown) {
    const e = err as {
      code?: string;
      message?: string;
      response?: string;
      responseCode?: number;
      command?: string;
    };

    logger.error('❌ Nodemailer send failed', {
      code: e.code,
      responseCode: e.responseCode,
      command: e.command,
      message: e.message,
      response: e.response,
    });

    return NextResponse.json(
      {
        error: 'Failed to send email. Please try again later.',
        ...(process.env.NODE_ENV !== 'production' && {
          debug: {
            code: e.code,
            responseCode: e.responseCode,
            message: e.message,
            response: e.response,
          },
        }),
      },
      { status: 500 },
    );
  }
}
