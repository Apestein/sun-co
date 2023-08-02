"use client"
import { Button } from "./ui/button"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { useAtom } from "jotai"
import { cartAtom } from "@/lib/atoms"

export function CartButton() {
  const [cart] = useAtom(cartAtom)
  return (
    <Button asChild>
      <Link href="/cart" className="flex gap-1">
        <ShoppingBag />
        View Cart
        <div className="grid h-5 w-5 place-content-center rounded-full bg-red-500 text-sm">
          {cart.length}
        </div>
      </Link>
    </Button>
  )
}
