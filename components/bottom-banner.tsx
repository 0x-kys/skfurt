import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function BottomBanner() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px]">
          <Image width={5840} height={3850} src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg" alt="Furniture masterpiece" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-8">
              <div className="max-w-md">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 text-balance leading-tight">
                  Create your dream furniture masterpiece today!
                </h2>
                <Button className="bg-white text-primary hover:bg-white/90 gap-2">
                  Pre-Order Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
