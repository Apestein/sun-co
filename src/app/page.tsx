import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

async function getProducts() {
  //Next.js app cannot call it's own api during build so will mock api here.
  const products = [
    {
      id: 1,
      name: "Off-White",
      description: "Out Of Office 'Ooo' Sneakers",
      price: 775,
      mainImage: "/product1-main.png",
      otherImages: [
        "/product1-1.png",
        "/product1-2.png",
        "/product1-3.png",
        "/product1-4.png",
      ],
    },
    {
      id: 2,
      name: "Nike",
      description: "Nike Gamma Force",
      price: 200,
      mainImage: "/product2-main.png",
      otherImages: [
        "/product2-1.png",
        "/product2-2.png",
        "/product2-3.png",
        "/product2-4.png",
      ],
    },
    {
      id: 3,
      name: "Nike",
      description: "Cosmic Unity 3",
      price: 160,
      mainImage: "/product3-main.png",
      otherImages: [
        "/product3-1.png",
        "/product3-2.png",
        "/product3-3.png",
        "/product3-4.png",
      ],
    },
    {
      id: 4,
      name: "Adidas",
      description: "Daily 3.0 Shoes",
      price: 98.99,
      mainImage: "/product4-main.png",
      otherImages: [
        "/product4-1.png",
        "/product4-2.png",
        "/product4-3.png",
        "/product4-4.png",
      ],
    },
  ]
  return products
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
