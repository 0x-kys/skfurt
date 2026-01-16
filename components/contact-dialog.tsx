"use client"

import { useState, useActionState } from "react" // Note: useActionState might be in 'react-dom' or 'react' depending on version. For Next 15/React 19 it is in 'react'.
import { useFormStatus } from "react-dom"
import { Sparkles, ArrowRight, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { submitContactForm, ContactFormState } from "@/app/actions"

const initialState: ContactFormState = {
  message: "",
  errors: {},
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={pending}>
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
  )
}

export function ContactDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [state, formAction] = useActionState(submitContactForm, initialState)

  // Reset form when dialog opens/closes if needed, or handle success state visually
  if (state.success && open) {
     // Optional: You could close it automatically or show a success screen.
     // For this "elegant" UX, let's show a success view inside the modal.
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-0 shadow-2xl bg-white/95 backdrop-blur-xl ring-1 ring-black/5">
        {state.success ? (
            <div className="flex flex-col items-center justify-center p-12 text-center h-[400px]">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 animate-in zoom-in duration-300">
                    <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 max-w-xs mb-8">
                    Thank you for reaching out. We will get back to you within 24 hours.
                </p>
                <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
            </div>
        ) : (
            <div className="flex flex-col h-full">
                {/* Header with decorative background */}
                <div className="bg-primary px-6 py-8 text-primary-foreground relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                    <DialogHeader className="relative z-10">
                        <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            Start Your Project
                        </DialogTitle>
                        <DialogDescription className="text-primary-foreground/80">
                            Tell us about your vision. We create custom furniture designed around your life.
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <form action={formAction} className="p-6 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" placeholder="John Doe" required />
                            {state.errors?.name && <p className="text-red-500 text-xs">{state.errors.name[0]}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone (Optional)</Label>
                            <Input id="phone" name="phone" placeholder="+91..." />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                        {state.errors?.email && <p className="text-red-500 text-xs">{state.errors.email[0]}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <Select name="service" required>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="custom-furniture">Custom Furniture</SelectItem>
                                <SelectItem value="interior-design">Interior Design</SelectItem>
                                <SelectItem value="cnc-works">CNC Works</SelectItem>
                                <SelectItem value="restoration">Restoration</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        {state.errors?.service && <p className="text-red-500 text-xs">{state.errors.service[0]}</p>}
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
                        {state.errors?.message && <p className="text-red-500 text-xs">{state.errors.message[0]}</p>}
                    </div>

                    <SubmitButton />
                </form>
            </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
