import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Product } from "@/types"

export async function getProducts() {
  const env = process.env.NODE_ENV
  let apiURL = ""
  if (env === "development") apiURL = "http://localhost:3000/api/products"
  else apiURL = "placeholder"
  const res = await fetch(apiURL, { cache: "no-store" })
  if (!res.ok) throw new Error("Failed to fetch data")
  return res.json() as Promise<Product[]>
}

export default async function Home() {
  const products = await getProducts()
  return (
    <>
      <section
        aria-label="hero-banner"
        className="my-4 flex flex-col justify-around rounded-xl border bg-neutral-200 p-8 text-center dark:bg-slate-50 dark:text-black md:my-8 md:flex-row"
      >
        <div className="flex flex-col justify-center gap-4">
          <Image
            src="/hero-img.svg"
            width={490}
            height={321}
            alt="hero-img"
            className="md:hidden"
          />
          <h1 className="text-3xl font-bold text-orange-500 md:text-6xl">
            25% OFF
          </h1>
          <h1 className="text-4xl font-bold md:text-7xl">Summer Sale</h1>
          <p>Discover our summer Styles with discount</p>
          <Button className="flex gap-1.5 dark:bg-slate-900 dark:text-slate-50">
            Shop Now <ArrowRight />
          </Button>
        </div>
        <Image
          src="/hero-img.svg"
          alt="hero-img"
          width={490}
          height={321}
          className="hidden md:block"
        />
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-bold md:text-3xl">
          Explore our latest drops
        </h2>
        <div aria-label="scroll-area">
          <div className="flex snap-x justify-between gap-6 overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-slate-700">
            {products.map((product) => (
              <div
                key={product.id}
                className="shrink-0 snap-center space-y-1.5"
              >
                <Link href={`/product/${product.id}`}>
                  <Image
                    alt="product-img"
                    width={522}
                    height={568}
                    src={product.mainImage}
                    className="w-48 rounded-3xl border-neutral-500 hover:border md:w-72"
                  />
                </Link>
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <p className="font-semibold">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
