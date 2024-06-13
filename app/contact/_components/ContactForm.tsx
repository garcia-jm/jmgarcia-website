"use client";

import { contactSchema } from "@/app/validationSchema";
import { Button } from "@/components/ui/button";
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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

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

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    setIsLoading(true);
    try {
      await fetch("/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.log("Axios request failed:", error);
      // Handle error appropriately
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...formData}>
      <form
        onSubmit={formData.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full"
      >
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
                  <FormMessage className="text-[0.8em]" />
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
              <FormMessage />
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
        <Button
          className="bg-[#4ade80] text-[#3f3f46]"
          type="submit"
          disabled={isLoading}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
