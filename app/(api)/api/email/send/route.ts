import { NextRequest } from "next/server";
import { envs } from "@/core/config";
// Services
import { EmailService } from "@/core/adapters/email";

const emailService = EmailService.instance({
  service: envs.mailerService,
  mailerEmail: envs.mailerEmail,
  mailerSecret: envs.mailerSecretKey,
});

export async function POST(req: NextRequest) {
  const { body, subject } = await req.json();
  const response = await emailService.sendEmail({
    subject,
    htmlBody: body,
    to: envs.mailerEmail,
  });
  if (!response) {
    return Response.json({ error: "Error on send message" }, { status: 400 });
  }
  return Response.json({ message: "Message successful send" }, { status: 200 });
}
