import { NextResponse } from "next/server"

export function GET(req: Request) {
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
  return NextResponse.json(products)
}
