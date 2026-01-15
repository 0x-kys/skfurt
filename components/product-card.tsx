import { ShoppingBag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  product: {
    id: number
    name: string
    badge: string
    originalPrice: number
    price: number
    image: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group cursor-pointer overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="relative aspect-square bg-muted overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-white px-3 py-1 rounded-full text-xs font-medium">{product.badge}</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-base mb-2">{product.name}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground line-through text-sm">${product.originalPrice.toFixed(2)}</span>
              <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
            </div>
            <button className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
