import { Product } from "@/types"
import { SnapCarousel } from "@/components/carousel"
import { AddToCartCard } from "@/components/add-to-cart"
import Image from "next/image"

async function getProduct(id: string) {
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

  return products[+id - 1]
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
