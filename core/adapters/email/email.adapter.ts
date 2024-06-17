import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export interface Attachment {
  filename: string;
  path: string;
}

export interface Options {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachment[];
}

export interface EmailOptions {
  service: string;
  mailerEmail: string;
  mailerSecret: string;
}

export class EmailService {
  constructor(options: EmailOptions) {
    const { mailerEmail, mailerSecret, service } = options;
    const transporter = nodemailer.createTransport({
      service,
      auth: {
        user: mailerEmail,
        pass: mailerSecret,
      },
    });
    this.transporter = transporter;
  }

  static _instance: EmailService;
  private readonly transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo>;

  static instance(options: EmailOptions) {
    if (!(this._instance instanceof EmailService)) {
      this._instance = new EmailService(options);
    }
    return this._instance;
  }

  async sendEmail(options: Options): Promise<boolean> {
    const { to, subject, htmlBody, attachments = [] } = options;
    try {
      await this.transporter.sendMail({
        to,
        subject,
        html: htmlBody,
        attachments,
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
