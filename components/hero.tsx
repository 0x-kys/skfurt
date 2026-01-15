import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image height={2015} width={3001} alt="Elegant furniture display" src={"https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg"} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Discover elegant & affordable furniture for good room
          </h1>
          <p className="text-white/90 text-base md:text-lg mb-8 max-w-xl">
            {
              "Explore timeless furniture with exceptional craftsmanship. Combining current aesthetics with timeless beauty."
            }
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
            Buy Now
          </Button>
        </div>

        {/* Stats Card */}
        <div className="absolute bottom-8 right-8 bg-primary/95 backdrop-blur-sm rounded-2xl p-6 hidden lg:block">
          <div className="flex gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">875+</div>
              <div className="text-white/80 text-sm">Product Uploaded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">400+</div>
              <div className="text-white/80 text-sm">Product Hype</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">800+</div>
              <div className="text-white/80 text-sm">Product Sold</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
