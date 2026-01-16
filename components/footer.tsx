import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-primary text-primary-foreground py-12 lg:py-16 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-white/50 rounded-full inline-block"></span>
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@skwoodworks.com"
                className="block text-white/80 text-sm hover:text-white transition-colors"
              >
                hello@skwoodworks.com
              </a>
              <a
                href="tel:+918901114356"
                className="block text-white/80 text-sm hover:text-white transition-colors"
              >
                +91 89011 14356
              </a>
              <a
                href="tel:+919466211937"
                className="block text-white/80 text-sm hover:text-white transition-colors"
              >
                +91 94662 11937
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-white/50 rounded-full inline-block"></span>
              Location
            </h3>
            <address className="text-white/80 text-sm not-italic leading-relaxed">
              Power House Road,
              <br />
              Babyal, Ambala Cantt
              <br />
              Haryana, 133005
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-white/50 rounded-full inline-block"></span>
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 gap-2">
              <Link
                href="#about"
                className="text-white/80 text-sm hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#showcase"
                className="text-white/80 text-sm hover:text-white transition-colors"
              >
                Showcase
              </Link>
              <Link
                href="/cnc"
                className="text-white/80 text-sm hover:text-white transition-colors"
              >
                CNC Works
              </Link>
              <Link
                href="#contact"
                className="text-white/80 text-sm hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="text-white/80 text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-white/80 text-sm hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </nav>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <div className="text-white/60 text-xs">
            © {new Date().getFullYear()} S.K. Wood Works. All rights reserved.
          </div>
        </div>
      </div>

      {/* Large Brand Name Watermark */}
      <div className="absolute -bottom-5 md:-bottom-10 2xl:-bottom-15 left-0 right-0 pointer-events-none opacity-[0.03] select-none overflow-hidden justify-items-center">
        <div className="text-[3rem] lg:text-[8rem] 2xl:text-[18rem] font-black leading-none text-center whitespace-nowrap text-white">
          S.K. Wood Works
        </div>
      </div>
    </footer>
  );
}
