import nodemailer from 'nodemailer';
import { createLogger } from '../logger';

const logger = createLogger('email/transporter');

export const GMAIL_USER = process.env.GMAIL_USER ?? '';
export const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD ?? '';
export const ADMIN_EMAIL = process.env.CONTACT_ADMIN_EMAIL ?? GMAIL_USER;

export const isEmailConfigured = Boolean(GMAIL_USER && GMAIL_APP_PASSWORD);

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD,
  },
});

if (isEmailConfigured) {
  logger.log('Nodemailer initialized for', GMAIL_USER);
} else {
  logger.error('⚠️  GMAIL_USER or GMAIL_APP_PASSWORD is missing from environment!');
}
