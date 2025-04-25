"use client";

import React, { useActionState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import SubmitFormButton from "./submit-form-button";
import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { LoaderIcon } from "lucide-react";

// Define the type for our action result
type ActionResult = {
  success: boolean;
  error?: string;
  data?: Record<string, unknown>;
};

export default function ContactForm() {
  const { toast } = useToast();

  const submitContactForm = async (
    previousState: ActionResult | null,
    formData: FormData
  ) => {
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast({
        description: "Message sent successfully.",
        className: "bg-green-600 text-white",
      });

      return { success: true };
    } catch (error) {
      // Return error state with original form data
      toast({
        variant: "destructive",
        description:
          "There was an error sending your message. Please try again.",
      });

      return {
        success: false,
        error: "Failed to send message",
        data: data,
      };
    }
  };

  const [state, action, isPending] = useActionState(submitContactForm, null);

  //   useEffect(() => {
  //     // If we have result data from a previous error, repopulate the form
  //     if (state && !state.success && state.data) {
  //       const form = document.querySelector("form") as HTMLFormElement;
  //       if (form) {
  //         Object.entries(state.data).forEach(([key, value]) => {
  //           const field = form.elements.namedItem(key) as
  //             | HTMLInputElement
  //             | HTMLTextAreaElement;
  //           if (field) {
  //             field.value = value as string;
  //           }
  //         });
  //       }
  //     }
  //   }, [state]);

  //   const onSubmitHandler = async (formData: FormData) => {
  //     const result = await submitContactForm(formData);

  //     if (result.success) {
  //       toast({
  //         description: "Message sent successfully.",
  //         className: "bg-green-600 text-white",
  //       });
  //       return;
  //     }

  //     toast({
  //       variant: "destructive",
  //       description: "There was an error sending your message. Please try again.",
  //     });
  //   };

  return (
    <Card className="border-0 shadow-sm">
      <CardContent className="p-6">
        <form className="space-y-6" action={action}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-md border border-input bg-background"
                placeholder="Your name"
                required
                defaultValue={state?.data?.name as string}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-md border border-input bg-background"
                placeholder="Your email"
                required
                defaultValue={state?.data?.email as string}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full p-3 rounded-md border border-input bg-background"
              placeholder="Subject of your message"
              required
              defaultValue={state?.data?.subject as string}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full p-3 rounded-md border border-input bg-background resize-none"
              placeholder="Your message"
              required
              defaultValue={state?.data?.message as string}
            />
          </div>

          <Button
            type="submit"
            className="bg-primary text-white font-medium w-full hover:bg-primary/90 md:w-40"
            disabled={isPending}
          >
            {isPending ? (
              <LoaderIcon className="animate-spin repeat-infinite" />
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
