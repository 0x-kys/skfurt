"use client";

import { useState, useActionState } from "react";
import { useFormStatus } from "react-dom";
import {
  Sparkles,
  ArrowRight,
  Loader2,
  CheckCircle2,
  X,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitContactForm, ContactFormState } from "@/app/actions";

const initialState: ContactFormState = {
  message: "",
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message
          <ArrowRight className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function ContactDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-[500px] p-0 overflow-hidden border-0 shadow-2xl bg-white/95 backdrop-blur-xl ring-1 ring-black/5"
      >
        {state.success ? (
          <div className="flex flex-col items-center justify-center p-12 text-center h-[400px]">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 animate-in zoom-in duration-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-500 max-w-xs mb-8">
              Thank you for reaching out. We will get back to you within 24
              hours.
            </p>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        ) : (
          <div className="flex flex-col max-h-[90vh]">
            {/* Header with decorative background */}
            <div className="bg-primary px-6 py-6 text-primary-foreground relative shrink-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

              <DialogClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 z-20"
                >
                  <X className="w-5 h-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </DialogClose>

              <DialogHeader className="relative z-10 pr-8">
                <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Get in touch
                </DialogTitle>
                <DialogDescription className="text-primary-foreground/80">
                  Tell us about your vision. We create custom furniture designed
                  around your life.
                </DialogDescription>
              </DialogHeader>
            </div>

            <div className="p-6 space-y-6">
              <form action={formAction} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                    />
                    {state.errors?.name && (
                      <p className="text-red-500 text-xs">
                        {state.errors.name[0]}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" name="phone" placeholder="+91..." />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                  {state.errors?.email && (
                    <p className="text-red-500 text-xs">
                      {state.errors.email[0]}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select name="service" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="custom-furniture">
                        Custom Furniture
                      </SelectItem>
                      <SelectItem value="cnc-works">CNC Works</SelectItem>
                      <SelectItem value="restoration">Restoration</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {state.errors?.service && (
                    <p className="text-red-500 text-xs">
                      {state.errors.service[0]}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us a bit about your project idea..."
                    className="min-h-[100px]"
                    required
                  />
                  {state.errors?.message && (
                    <p className="text-red-500 text-xs">
                      {state.errors.message[0]}
                    </p>
                  )}
                </div>

                <SubmitButton />
              </form>

              {/* WhatsApp / Phone Section */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or reach us directly
                  </span>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-100 flex items-center gap-4">
                <div className="bg-green-500 rounded-full p-2 text-white shrink-0">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-green-900 mb-1">
                    Call or WhatsApp
                  </span>
                  <div className="flex flex-col gap-x-4 gap-y-1 text-sm text-green-800">
                    <a
                      href="https://wa.me/918901114356"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-1"
                    >
                      +91-8901114356
                    </a>
                    <a
                      href="https://wa.me/919466211937"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-1"
                    >
                      +91-9466211937
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
