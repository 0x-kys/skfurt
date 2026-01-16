import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { ContactDialog } from "@/components/contact-dialog"

export default function BottomBanner() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px] group">
          <Image 
            width={5840} 
            height={3850} 
            src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg" 
            alt="Furniture masterpiece" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-8 lg:px-12">
              <div className="max-w-lg">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 text-balance leading-tight">
                  Ready to Transform Your Space?
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  Let&apos;s discuss your ideas. Our team is ready to bring your vision to life with precision and style.
                </p>
                <ContactDialog>
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8">
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
