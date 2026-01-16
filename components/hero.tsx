import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image height={2015} width={3001} alt="Elegant furniture display" src={"https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg"} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Crafting Timeless Woodwork for Your Modern Spaces
          </h1>
          <p className="text-white/90 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
            {
              "We bring your vision to life with exceptional craftsmanship. Combining traditional techniques with modern aesthetics to create bespoke furniture that lasts a lifetime."
            }
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 font-semibold px-8 rounded-full">
            <Link href="#showcase">
              View Our Work
            </Link>
          </Button>
        </div>

        {/* Stats Card */}
        <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hidden lg:block">
          <div className="flex gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-white/80 text-sm font-medium uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center border-l border-white/20 pl-12">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-white/80 text-sm font-medium uppercase tracking-wide">Projects Completed</div>
            </div>
            <div className="text-center border-l border-white/20 pl-12">
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-white/80 text-sm font-medium uppercase tracking-wide">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
