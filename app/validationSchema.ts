import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, "Must be at least 2 letters.")
    .max(50, "Must be at most 50 letters.")
    .optional(),
  lastName: z
    .string()
    .min(2, "Must be at least 2 letters.")
    .max(50, "Must be at most 50 letters.")
    .optional(),
  email: z.string().email("Email is required!").min(1, "Email is required!"),
  company: z
    .string()
    .min(2, "Company name should be at least 2 letters.")
    .max(255, "Company name should be at most 255 letters.")
    .optional(),
  message: z
    .string()
    .min(3, "Message should be at least 3 letters.")
    .max(255, "Message should be at most 255 letters."),
});
