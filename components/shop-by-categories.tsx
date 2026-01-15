import { ShoppingBag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const categories = [
  { id: 1, name: "Living Room" },
  { id: 2, name: "Dining Room" },
  { id: 3, name: "Office Room" },
  { id: 4, name: "Kitchen Room" },
]

const products = [
  {
    id: 1,
    name: "Blue Velvet Sofa",
    price: 694.01,
    image: "/blue-velvet-sofa-modern.jpg",
  },
  {
    id: 2,
    name: "Grey Armchair",
    price: 233.79,
    image: "/grey-upholstered-armchair.jpg",
  },
  {
    id: 3,
    name: "Beige Accent Chair",
    price: 438.0,
    image: "/beige-accent-chair-modern.jpg",
  },
  {
    id: 4,
    name: "Tan Lounge Chair",
    price: 529.0,
    image: "/tan-lounge-chair-modern.jpg",
  },
]

export default function ShopByCategories() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">Shop by Categories</h2>

        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          {/* Categories */}
          <div className="space-y-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors text-foreground/80 hover:text-foreground"
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="group cursor-pointer overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-square bg-muted overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-base mb-2">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                        <button className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8">Show More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
