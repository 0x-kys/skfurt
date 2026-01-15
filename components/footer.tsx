import Link from "next/link"
import { Facebook, Instagram, X, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="text-white/80 text-sm">hello@skwoodworks.com</p>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-bold text-lg mb-4">Location</h3>
            <address className="text-white/80 text-sm not-italic">
              Power House Road,
              <br />
              Babyal, Ambala Cantt
              <br />
              133005
            </address>
          </div>

          {/* Home */}
          <div>
            <h3 className="font-bold text-lg mb-4">Home</h3>
            <nav className="space-y-2">
              <Link href="/about" className="block text-white/80 text-sm hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/privacy" className="block text-white/80 text-sm hover:text-white transition-colors">
                Privacy & Policy
              </Link>
              <Link href="/terms" className="block text-white/80 text-sm hover:text-white transition-colors">
                Terms & Condition
              </Link>
            </nav>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex gap-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Large Brand Name Watermark */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-10">
        <div className="text-[8rem] lg:text-[18rem] font-bold leading-none text-center">S.K. Wood Works</div>
      </div>
    </footer>
  )
}
