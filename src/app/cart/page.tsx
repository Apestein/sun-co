"use client"
import { useAtom } from "jotai"
import { cartAtom } from "@/lib/atoms"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Plus, Minus, ArrowRight } from "lucide-react"

export default function Cart() {
  const [cart, setCart] = useAtom(cartAtom)

  function calculateTotal() {
    if (!cart.length) return 0
    return cart
      .map((el) => el.price * el.quanity)
      .reduce((accumulator, current) => accumulator + current)
  }
  const total = calculateTotal().toFixed(2)
  const tax = (+total * 0.1).toFixed(2)
  const SHIPPING = "20.00"
  const DISCOUNT = "-6.00"
  const cartTotal = (
    Number(total) +
    Number(tax) +
    Number(SHIPPING) +
    Number(DISCOUNT)
  ).toFixed(2)

  function updateCartItem(id: number, action: "+" | "-") {
    if (action === "+")
      setCart((prev) =>
        prev.map((el) =>
          el.id === id ? { ...el, quanity: el.quanity + 1 } : el,
        ),
      )
    else
      setCart((prev) =>
        prev.map((el) =>
          el.id === id ? { ...el, quanity: el.quanity - 1 } : el,
        ),
      )
  }

  function deleteFromCart(id: number) {
    setCart((prev) => prev.filter((el) => el.id !== id))
  }

  return (
    <>
      <section className="py-8 md:hidden">
        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between font-semibold">
              <p>Subtotal</p>
              <p>${total}</p>
            </div>
            <div className="flex justify-between font-semibold">
              <p>Shipping and delivery</p>
              <p>${SHIPPING}</p>
            </div>
            <div className="flex justify-between font-semibold">
              <p>Tax</p>
              <p>${tax}</p>
            </div>
            <div className="flex justify-between font-semibold">
              <p>Discount</p>
              <p className="text-orange-500">${DISCOUNT}</p>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-3 border-t pt-4">
            <div className="flex w-full justify-between font-semibold">
              <p>Total</p>
              <p>${cartTotal}</p>
            </div>
            <Button className="flex w-full gap-1.5">
              Checkout <ArrowRight />
            </Button>
          </CardFooter>
        </Card>
      </section>
      <section className="gap-16 md:mt-8 md:grid md:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          <h2 className="text-xl font-bold md:text-3xl">Your Bag</h2>
          <ul className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-2 gap-4 border-b pb-4"
              >
                <Image
                  src={item.mainImage}
                  alt="product-item"
                  width={522}
                  height={568}
                />
                <div className="flex flex-col justify-around font-semibold md:text-3xl">
                  <div className="flex justify-between">
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                  </div>
                  <p className="text-sm font-normal text-neutral-600 dark:text-slate-50 md:text-lg">
                    {item.description}
                  </p>
                  <div className="flex w-fit rounded-md border p-1">
                    <Button
                      variant="secondary"
                      onClick={() => {
                        if (item.quanity === 0) return
                        updateCartItem(item.id, "-")
                      }}
                      className="px-1 md:px-3"
                    >
                      <Minus />
                    </Button>
                    <input
                      type="number"
                      value={item.quanity}
                      className="w-12 text-center no-input-arrow dark:bg-transparent"
                    />
                    <Button
                      variant="secondary"
                      onClick={() => updateCartItem(item.id, "+")}
                      className="px-1 md:px-3"
                    >
                      <Plus />
                    </Button>
                  </div>
                  <Button
                    variant="outline"
                    className="self-start underline md:text-xl"
                    onClick={() => deleteFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <section className="hidden py-8 md:block">
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between font-semibold">
                <p>Subtotal</p>
                <p>${total}</p>
              </div>
              <div className="flex justify-between font-semibold">
                <p>Shipping and delivery</p>
                <p>${SHIPPING}</p>
              </div>
              <div className="flex justify-between font-semibold">
                <p>Tax</p>
                <p>${tax}</p>
              </div>
              <div className="flex justify-between font-semibold">
                <p>Discount</p>
                <p className="text-orange-500">${DISCOUNT}</p>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-3 border-t pt-4">
              <div className="flex w-full justify-between font-semibold">
                <p>Total</p>
                <p>${cartTotal}</p>
              </div>
              <Button className="flex w-full gap-1.5" asChild>
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  Checkout <ArrowRight />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </section>
      </section>
    </>
  )
}
