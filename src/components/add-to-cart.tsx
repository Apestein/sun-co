"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"
import { Product } from "@/types"
import { useState } from "react"
import { useAtom } from "jotai"
import { cartAtom } from "@/lib/atoms"

export function AddToCartCard({ product }: { product: Product }) {
  const [quanity, setQuanity] = useState(1)
  const [cart, setCart] = useAtom(cartAtom)

  function updateCart() {
    if (quanity === 0) return
    const cartItem = cart.find((el) => el.id === product.id)
    if (cartItem)
      setCart((prev) =>
        prev.map((el) =>
          el.id === cartItem.id ? { ...el, quanity: el.quanity + quanity } : el,
        ),
      )
    else setCart((prev) => [...prev, { ...product, quanity }])
    setQuanity(0)
  }

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="md:space-y-4">
        <CardTitle className="md:text-3xl">{product.name}</CardTitle>
        <CardDescription className="md:text-xl">
          {product.description}
        </CardDescription>
        <p className="font-semibold md:text-3xl">${product.price}</p>
      </CardHeader>
      <CardContent className="space-y-4 border-t pt-3">
        <div className="font-semibold">
          Quanity
          <div className="flex w-fit rounded-md border p-1">
            <Button
              variant="secondary"
              onClick={() => {
                if (quanity === 0) return
                setQuanity((prev) => prev - 1)
              }}
            >
              <Minus />
            </Button>
            <input
              type="number"
              value={quanity}
              className="remove-arrow w-12 text-center"
            />
            <Button
              variant="secondary"
              onClick={() => setQuanity((prev) => prev + 1)}
            >
              <Plus />
            </Button>
          </div>
        </div>
        <Button className="w-full" onClick={updateCart}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}
