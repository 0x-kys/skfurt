import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="bg-primary py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Sign up for newsletter"
            className="flex-1 bg-primary border-white/20 text-white placeholder:text-white/60 h-12"
          />
          <Button className="bg-white text-primary hover:bg-white/90 px-8 h-12">Subscribe Now</Button>
        </div>
      </div>
    </section>
  )
}
