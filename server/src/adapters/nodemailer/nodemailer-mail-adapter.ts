import { MailAdapter, SendMailData } from "../mail-adapter"
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d33a21fa95440d",
    pass: "b45456ae908abd"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    transport.sendMail({
      from: 'Equipe Widget <contato@widget.com>',
      to: 'Kélison Rosendo <kelisonrosendo@gmail.com',
      subject,
      html: body
    })
  }
}