import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-4 h-4 bg-primary rounded-sm" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              S.K. Wood Works
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 bg-black/20 backdrop-blur-sm px-8 py-3 rounded-full border border-white/10">
            <Link
              href="#home"
              className="text-white font-medium hover:text-white/80 transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-white font-medium hover:text-white/80 transition-colors text-sm"
            >
              About Us
            </Link>
            <Link
              href="#showcase"
              className="text-white font-medium hover:text-white/80 transition-colors text-sm"
            >
              Showcase
            </Link>
            <Link
              href="#contact"
              className="text-white font-medium hover:text-white/80 transition-colors text-sm"
            >
              Contact Us
            </Link>
          </nav>

          {/* Icons / Action Button */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="bg-white text-primary hover:bg-white/90 font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all border-0"
            >
              <Link href="/cnc" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 fill-primary text-primary" />
                <span>CNC Works</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
