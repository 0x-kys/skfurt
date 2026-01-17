import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ContactDialog } from "@/components/contact-dialog"

export default function CncHero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-stone-950">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          height={1080} 
          width={1920} 
          alt="CNC Router in action" 
          src="https://images.pexels.com/photos/8986047/pexels-photo-8986047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 mb-6 border border-amber-500/50 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium tracking-wide uppercase">
              Precision Engineering
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
              Precision <span className="text-amber-500">CNC</span> <br/>
              Wood Carving
            </h1>
            <p className="text-stone-300 text-lg mb-8 max-w-lg leading-relaxed">
              Transforming wood into intricate art. From complex Jali designs to 3D parametric waves, our state-of-the-art CNC routers deliver millimeter-perfect results for your architectural needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <Button asChild size="lg" className="bg-amber-600 text-white hover:bg-amber-700 font-semibold px-8 rounded-full">
                <Link href="#cnc-showcase">
                  Explore Designs
                </Link>
              </Button>
              <ContactDialog>
                <Button variant="outline" size="lg" className="border-stone-600 text-stone-200 hover:bg-stone-800 hover:text-white rounded-full">
                  Request Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </ContactDialog>
            </div>
          </div>

          {/* Abstract/Technical Visual or Stats */}
          <div className="hidden lg:grid grid-cols-2 gap-4 opacity-90">
            <div className="bg-stone-900/50 backdrop-blur-md border border-stone-800 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-500 mb-2">3D</div>
              <p className="text-stone-400 text-sm">Carving Capability</p>
            </div>
            <div className="bg-stone-900/50 backdrop-blur-md border border-stone-800 p-6 rounded-2xl transform translate-y-8">
              <div className="text-4xl font-bold text-amber-500 mb-2">
                Custom
              </div>
              <p className="text-stone-400 text-sm">Design Implementation</p>
            </div>
            <div className="bg-stone-900/50 backdrop-blur-md border border-stone-800 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-500 mb-2">Fast</div>
              <p className="text-stone-400 text-sm">Turnaround Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
