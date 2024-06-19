"use client";

import { contactSchema } from "@/app/validationSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendEmail } from "../actions";
import SubmitButton from "./SubmitButton";

const ContactForm = () => {
  const formData = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    },
  });

  return (
    <Form {...formData}>
      <form action={sendEmail} className="flex flex-col gap-6 w-full">
        <div className="flex items-center gap-4">
          <div className="w-full">
            <FormField
              control={formData.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-[#3f3f46] border-[#3f3f46] text-[0.8em] xl:text-[1em] 2xl:text-[1.3em]"
                      placeholder="First name..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[0.8em]" />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
            <FormField
              control={formData.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-[#3f3f46] border-[#3f3f46] text-[0.8em] xl:text-[1em] 2xl:text-[1.3em]"
                      placeholder="Last name..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={formData.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="bg-[#3f3f46] border-[#3f3f46] text-[0.8em] xl:text-[1em] 2xl:text-[1.3em]"
                  placeholder="Email..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formData.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="bg-[#3f3f46] border-[#3f3f46] text-[0.8em] xl:text-[1em] 2xl:text-[1.3em]"
                  placeholder="Company..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={formData.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Type your message..."
                  className="bg-[#3f3f46] border-[#3f3f46] resize-none text-[0.8em] 2xl:h-[200px] xl:text-[1em] 2xl:text-[1.3em]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton />
      </form>
    </Form>
  );
};

export default ContactForm;
