import Link from "next/link"
import { Search, User, ShoppingCart } from "lucide-react"

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-full" />
            </div>
            <span className="text-xl font-bold text-white">S.K. Wood Works</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-white/80 transition-colors text-sm">
              Home
            </Link>
            <Link href="/shop" className="text-white hover:text-white/80 transition-colors text-sm">
              Shop
            </Link>
            <Link href="/products" className="text-white hover:text-white/80 transition-colors text-sm">
              Products
            </Link>
            <Link href="/about" className="text-white hover:text-white/80 transition-colors text-sm">
              About Us
            </Link>
            <Link href="/contact" className="text-white hover:text-white/80 transition-colors text-sm">
              Contact Us
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-white/80 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-white/80 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-white/80 transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
