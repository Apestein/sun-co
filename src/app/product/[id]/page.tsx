import { Product } from "@/types"
import { SnapCarousel } from "@/components/carousel"
import { AddToCartCard } from "@/components/add-to-cart"
import Image from "next/image"

async function getProduct(id: string) {
  const env = process.env.NODE_ENV
  let apiURL = ""
  if (env === "development") apiURL = `http://localhost:3000/api/product/${id}`
  else apiURL = `https://sun-97ccrus01-apestein.vercel.app/api/product/${id}`
  const res = await fetch(apiURL, { cache: "no-store" })
  if (!res.ok) throw new Error("Failed to fetch data")
  return res.json() as Promise<Product>
}

export default async function Product({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)
  return (
    <>
      <section className="gap-8 py-8 md:grid md:grid-cols-2">
        <div>
          <SnapCarousel product={product} />
        </div>
        <AddToCartCard product={product} />
      </section>
      <section className="items-center gap-8 md:grid md:grid-cols-2">
        <div className="md:text-xl">
          <h3 className="border-b font-semibold">Description</h3>
          <p>
            Energize your look with a fresh take on heritage adidas style. The
            adidas Daily 3.0 Shoes vut a classic profile with a modern suede
            upper. Your walk across campus or commute across town has never
            looked or felt this good.
          </p>
          <li>Regular fit</li>
          <li>Lace closure</li>
          <li>Rubber outsole with vulcanized look</li>
          <li>Imported</li>
        </div>
        <Image
          src={product.otherImages[3]}
          alt="product-image"
          width={1056}
          height={746}
          className="mt-4"
        />
      </section>
    </>
  )
}
