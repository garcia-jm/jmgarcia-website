"use server";

import { Resend } from "resend";
import ContactEmail from "../emails/Contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const firstName = formData.get("firstName")?.toString();
  const lastName = formData.get("lastName")?.toString();
  const company = formData.get("company")?.toString();
  const email = formData.get("email")?.toString();
  const message = formData.get("message")?.toString();

  await resend.emails.send({
    from: "email@justinmarigarcia.com",
    to: "garcia.justinmari@gmail.com",
    subject: "Hello, World!",
    react: ContactEmail({ firstName, lastName, company, message, email }),
  });
};
