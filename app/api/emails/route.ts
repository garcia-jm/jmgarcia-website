import ContactEmail from "@/app/emails/Contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: Request) => {
  const { firstName, lastName, company, message, email } = await request.json();
  await resend.emails.send({
    from: "email@justinmarigarcia.com",
    to: "garcia.justinmari@gmail.com",
    subject: "Hello, World!",
    react: ContactEmail({ firstName, lastName, company, message, email }),
  });

  return NextResponse.json({ message: "Email sent!" });
};

// codewithguillaume.com
