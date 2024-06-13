"use server";

import ContactEmail from "@/app/emails/Contact";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest, response: NextResponse) {
  const { firstName, lastName, company, message, email } = await request.json();
  await resend.emails.send({
    from: "email@justinmarigarcia.com",
    to: "garcia.justinmari@gmail.com",
    subject: "Hello, World!",
    react: ContactEmail({ firstName, lastName, company, message, email }),
  });

  return NextResponse.json({ message: "Email sent!" });
}
