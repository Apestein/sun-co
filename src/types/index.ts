export interface Product {
  id: number
  name: string
  description: string
  price: number
  mainImage: string
  otherImages: string[]
}

export interface CartItem extends Product {
  quanity: number
}
