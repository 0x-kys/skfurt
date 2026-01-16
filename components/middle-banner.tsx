import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ContactDialog } from "@/components/contact-dialog"

export default function MiddleBanner() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px] group">
          <img 
            src="https://loremflickr.com/1200/800/interior,luxury?lock=50" 
            alt="Modern living room" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-8 lg:px-12">
              <div className="max-w-xl">
                <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Custom Design Services</span>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 text-balance leading-tight">
                  Bespoke Interiors Designed Around You
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-md">
                  From concept to installation, we handle every detail to ensure your space reflects your personality and lifestyle.
                </p>
                <ContactDialog>
                  <Button size="lg" className="bg-white text-black hover:bg-white/90 gap-2 font-semibold">
                    Contact Now
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </ContactDialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
