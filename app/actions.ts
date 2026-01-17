"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormState = {
  success?: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    service?: string[];
    message?: string[];
  };
  message?: string;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors below.",
    };
  }

  // TODO: Integrate Resend here
  // const { name, email, message, service } = validatedFields.data
  // await resend.emails.send({ ... })

  console.log("Contact form submitted:", validatedFields.data);

  return {
    success: true,
    message: "Thank you! We'll be in touch shortly.",
  };
}
