import { escapeHtml } from '../html';

export interface AdminEmailData {
  firstName: string;
  lastName: string;
  email: string;
  budget: string;
  message: string;
  ip: string;
  receivedAt: Date;
}

export function buildAdminEmailHtml(d: AdminEmailData): string {
  const fullName = escapeHtml(`${d.firstName} ${d.lastName}`);
  const initials = escapeHtml(
    `${d.firstName.charAt(0)}${d.lastName.charAt(0)}`.toUpperCase(),
  );
  const safeEmail = escapeHtml(d.email);
  const safeBudget = escapeHtml(d.budget);
  const safeMessage = escapeHtml(d.message).replace(/\n/g, '<br/>');
  const wordCount = d.message.trim().split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));
  const formattedDate = d.receivedAt.toLocaleString('en-IN', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata',
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Inquiry</title>
</head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f5f7;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

          <!-- Header / Gradient banner -->
          <tr>
            <td style="background:linear-gradient(135deg,#6366f1 0%,#ec4899 50%,#8b5cf6 100%);padding:32px 32px 28px 32px;color:#ffffff;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;opacity:0.85;">📬 New Inquiry</p>
                    <h1 style="margin:8px 0 0 0;font-size:26px;font-weight:700;line-height:1.3;">Someone wants to work with you!</h1>
                    <p style="margin:8px 0 0 0;font-size:14px;opacity:0.9;">Received ${escapeHtml(formattedDate)} IST</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sender card -->
          <tr>
            <td style="padding:28px 32px 8px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="56" valign="top" style="padding-right:16px;">
                    <div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#ec4899);color:#ffffff;font-size:20px;font-weight:700;line-height:56px;text-align:center;">${initials}</div>
                  </td>
                  <td valign="middle">
                    <p style="margin:0;font-size:18px;font-weight:700;color:#111827;">${fullName}</p>
                    <p style="margin:4px 0 0 0;font-size:14px;color:#6b7280;">
                      <a href="mailto:${safeEmail}" style="color:#6366f1;text-decoration:none;font-weight:500;">${safeEmail}</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Meta pills -->
          <tr>
            <td style="padding:20px 32px 8px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right:8px;">
                    <span style="display:inline-block;padding:6px 12px;background:#ecfdf5;color:#047857;border-radius:999px;font-size:12px;font-weight:600;">💰 Budget: ${safeBudget}</span>
                  </td>
                  <td style="padding-right:8px;">
                    <span style="display:inline-block;padding:6px 12px;background:#eff6ff;color:#1d4ed8;border-radius:999px;font-size:12px;font-weight:600;">📖 ${readTime} min read</span>
                  </td>
                  <td>
                    <span style="display:inline-block;padding:6px 12px;background:#fef3c7;color:#92400e;border-radius:999px;font-size:12px;font-weight:600;">📝 ${wordCount} words</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:24px 32px 8px 32px;">
              <p style="margin:0 0 12px 0;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:1px;">Message</p>
              <div style="padding:20px;background:#f9fafb;border-left:4px solid #6366f1;border-radius:8px;font-size:15px;line-height:1.7;color:#1f2937;">
                ${safeMessage}
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:24px 32px 8px 32px;" align="center">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:linear-gradient(135deg,#6366f1,#ec4899);border-radius:8px;">
                    <a href="mailto:${safeEmail}?subject=Re:%20Your%20portfolio%20inquiry"
                       style="display:inline-block;padding:14px 28px;color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;">
                      Reply to ${escapeHtml(d.firstName)} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Technical details -->
          <tr>
            <td style="padding:24px 32px;">
              <details style="background:#f9fafb;padding:12px 16px;border-radius:8px;border:1px solid #e5e7eb;">
                <summary style="cursor:pointer;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:1px;">Technical details</summary>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:12px;font-size:13px;color:#4b5563;">
                  <tr><td style="padding:4px 0;width:120px;color:#9ca3af;">IP address</td><td style="padding:4px 0;font-family:'SF Mono',Menlo,monospace;">${escapeHtml(d.ip)}</td></tr>
                  <tr><td style="padding:4px 0;color:#9ca3af;">Source</td><td style="padding:4px 0;">mohd-uzair.vercel.app/contact</td></tr>
                  <tr><td style="padding:4px 0;color:#9ca3af;">Timestamp</td><td style="padding:4px 0;font-family:'SF Mono',Menlo,monospace;">${escapeHtml(d.receivedAt.toISOString())}</td></tr>
                </table>
              </details>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#111827;padding:20px 32px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.6;">
                Sent automatically by your portfolio at
                <a href="https://mohd-uzair.vercel.app" style="color:#a5b4fc;text-decoration:none;">mohd-uzair.vercel.app</a><br/>
                Reply directly to this email to respond to ${escapeHtml(d.firstName)}.
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

export function buildAdminEmailText(d: AdminEmailData): string {
  return [
    'NEW PORTFOLIO INQUIRY',
    '======================',
    '',
    `From:    ${d.firstName} ${d.lastName} <${d.email}>`,
    `Budget:  ${d.budget}`,
    `When:    ${d.receivedAt.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST`,
    `IP:      ${d.ip}`,
    '',
    'Message:',
    '--------',
    d.message,
    '',
    `Reply: mailto:${d.email}`,
  ].join('\n');
}
