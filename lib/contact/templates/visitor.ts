import { escapeHtml } from '../html';

export interface VisitorEmailData {
  firstName: string;
  budget: string;
  message: string;
}

export function buildVisitorEmailHtml(d: VisitorEmailData): string {
  const safeFirstName = escapeHtml(d.firstName);
  const safeBudget = escapeHtml(d.budget);
  const safeMessageSnippet = escapeHtml(
    d.message.length > 220 ? d.message.slice(0, 220).trim() + '…' : d.message,
  ).replace(/\n/g, '<br/>');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thanks for reaching out</title>
</head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,sans-serif;color:#1f2937;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f5f7;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

          <!-- Gradient banner -->
          <tr>
            <td style="background:linear-gradient(135deg,#6366f1 0%,#ec4899 50%,#8b5cf6 100%);padding:40px 32px;text-align:center;color:#ffffff;">
              <div style="display:inline-block;width:64px;height:64px;border-radius:50%;background:rgba(255,255,255,0.18);line-height:64px;font-size:32px;margin-bottom:16px;">✓</div>
              <h1 style="margin:0;font-size:28px;font-weight:700;line-height:1.3;">Message received, ${safeFirstName}!</h1>
              <p style="margin:12px 0 0 0;font-size:15px;opacity:0.95;line-height:1.5;">Thanks for reaching out. I'll personally review your message and get back to you within 48 hours.</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 32px 8px 32px;">
              <p style="margin:0 0 16px 0;font-size:16px;line-height:1.6;color:#374151;">
                Hi ${safeFirstName},
              </p>
              <p style="margin:0 0 16px 0;font-size:16px;line-height:1.6;color:#374151;">
                I've received your inquiry and added it to my priority queue. Here's a quick recap of what you sent:
              </p>
            </td>
          </tr>

          <!-- Recap card -->
          <tr>
            <td style="padding:8px 32px 8px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <p style="margin:0 0 8px 0;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:1px;">Project budget</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#111827;">💰 ${safeBudget}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 20px 18px 20px;">
                    <p style="margin:0 0 8px 0;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:1px;">Your message</p>
                    <p style="margin:0;font-size:14px;line-height:1.6;color:#374151;font-style:italic;">"${safeMessageSnippet}"</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- What happens next -->
          <tr>
            <td style="padding:28px 32px 8px 32px;">
              <h2 style="margin:0 0 16px 0;font-size:18px;font-weight:700;color:#111827;">What happens next?</h2>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="40" valign="top" style="padding:6px 12px 6px 0;">
                    <div style="width:32px;height:32px;border-radius:50%;background:#eef2ff;color:#6366f1;text-align:center;line-height:32px;font-weight:700;font-size:14px;">1</div>
                  </td>
                  <td valign="middle" style="padding:6px 0;">
                    <p style="margin:0;font-size:14px;color:#374151;line-height:1.5;"><strong>Review</strong> — I'll read your message carefully today.</p>
                  </td>
                </tr>
                <tr>
                  <td width="40" valign="top" style="padding:6px 12px 6px 0;">
                    <div style="width:32px;height:32px;border-radius:50%;background:#eef2ff;color:#6366f1;text-align:center;line-height:32px;font-weight:700;font-size:14px;">2</div>
                  </td>
                  <td valign="middle" style="padding:6px 0;">
                    <p style="margin:0;font-size:14px;color:#374151;line-height:1.5;"><strong>Reply</strong> — Expect a personal response within 48 hours.</p>
                  </td>
                </tr>
                <tr>
                  <td width="40" valign="top" style="padding:6px 12px 6px 0;">
                    <div style="width:32px;height:32px;border-radius:50%;background:#eef2ff;color:#6366f1;text-align:center;line-height:32px;font-weight:700;font-size:14px;">3</div>
                  </td>
                  <td valign="middle" style="padding:6px 0;">
                    <p style="margin:0;font-size:14px;color:#374151;line-height:1.5;"><strong>Discuss</strong> — We'll align on scope, timeline, and next steps.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:28px 32px 8px 32px;" align="center">
              <p style="margin:0 0 16px 0;font-size:14px;color:#6b7280;">In the meantime, take a look at my recent work:</p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:linear-gradient(135deg,#6366f1,#ec4899);border-radius:8px;">
                    <a href="https://mohd-uzair.vercel.app/projects"
                       style="display:inline-block;padding:14px 32px;color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;">
                      View my projects →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Signature -->
          <tr>
            <td style="padding:32px 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #e5e7eb;padding-top:24px;">
                <tr>
                  <td>
                    <p style="margin:0 0 4px 0;font-size:14px;color:#6b7280;">Talk soon,</p>
                    <p style="margin:0;font-size:18px;font-weight:700;color:#111827;">Mohd Uzair</p>
                    <p style="margin:2px 0 0 0;font-size:13px;color:#6b7280;">Full-Stack Developer · Delhi-NCR, India</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Social footer -->
          <tr>
            <td style="background:#111827;padding:24px 32px;text-align:center;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto 12px auto;">
                <tr>
                  <td style="padding:0 8px;">
                    <a href="https://github.com/TheUzair" style="color:#a5b4fc;text-decoration:none;font-size:13px;font-weight:500;">GitHub</a>
                  </td>
                  <td style="color:#4b5563;">·</td>
                  <td style="padding:0 8px;">
                    <a href="https://www.linkedin.com/in/mohd-uzair-b73691254" style="color:#a5b4fc;text-decoration:none;font-size:13px;font-weight:500;">LinkedIn</a>
                  </td>
                  <td style="color:#4b5563;">·</td>
                  <td style="padding:0 8px;">
                    <a href="https://mohd-uzair.vercel.app" style="color:#a5b4fc;text-decoration:none;font-size:13px;font-weight:500;">Portfolio</a>
                  </td>
                </tr>
              </table>
              <p style="margin:0;font-size:11px;color:#6b7280;line-height:1.5;">
                You're receiving this because you submitted the contact form at mohd-uzair.vercel.app.<br/>
                Just reply to this email if you'd like to add more details.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildVisitorEmailText(d: VisitorEmailData): string {
  return [
    `Hi ${d.firstName},`,
    '',
    "Thanks for reaching out — your message has landed safely in my inbox.",
    "I'll personally review it and get back to you within 48 hours.",
    '',
    'Quick recap:',
    `  Budget:  ${d.budget}`,
    `  Message: ${d.message.length > 160 ? d.message.slice(0, 160) + '…' : d.message}`,
    '',
    'In the meantime, feel free to browse my work:',
    '  https://mohd-uzair.vercel.app/projects',
    '',
    'Talk soon,',
    'Mohd Uzair',
    'Full-Stack Developer · Delhi-NCR, India',
    '',
    'GitHub:   https://github.com/TheUzair',
    'LinkedIn: https://www.linkedin.com/in/mohd-uzair-b73691254',
  ].join('\n');
}
