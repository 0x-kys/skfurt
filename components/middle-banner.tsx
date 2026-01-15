import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function MiddleBanner() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px]">
          <img src="/modern-living-room-white-sofa-brown-cushions-minim.jpg" alt="Modern living room" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-8">
              <div className="max-w-lg">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-balance leading-tight">
                  FIND THE MOST APPROPRIATE FURNISHINGS FOR YOUR HOUSE
                </h2>
                <Button className="bg-white text-primary hover:bg-white/90 gap-2">
                  Explore Now
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
