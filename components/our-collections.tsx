import { ChevronLeft, ChevronRight } from "lucide-react"
import ProductCard from "@/components/product-card"

const products = [
  {
    id: 1,
    name: "Armchair",
    badge: "Best Price",
    originalPrice: 99.99,
    price: 64.01,
    image: "/modern-white-armchair-wooden-legs.jpg",
  },
  {
    id: 2,
    name: "Bar Stool",
    badge: "Top Rated",
    originalPrice: 299.99,
    price: 233.75,
    image: "/black-bar-stool-metal-legs.jpg",
  },
  {
    id: 3,
    name: "Modular Sofa",
    badge: "Top Rated",
    originalPrice: 3999.99,
    price: 3220.0,
    image: "/gray-modular-sofa-modern.jpg",
  },
  {
    id: 4,
    name: "Wooden Cabinet",
    badge: "Best Price",
    originalPrice: 699.99,
    price: 529.0,
    image: "/wooden-cabinet-natural-finish.jpg",
  },
  {
    id: 5,
    name: "Blue Velvet Sofa",
    badge: "Top Rated",
    originalPrice: 849.99,
    price: 694.01,
    image: "/blue-velvet-sofa-modern.jpg",
  },
  {
    id: 6,
    name: "Pendant Lamp",
    badge: "Best Price",
    originalPrice: 299.99,
    price: 249.0,
    image: "/black-pendant-lamp-modern.jpg",
  },
]

export default function OurCollections() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Our Collections</h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-border hover:bg-secondary transition-colors flex items-center justify-center">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full border border-border hover:bg-secondary transition-colors flex items-center justify-center">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
