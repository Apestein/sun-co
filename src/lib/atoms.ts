import { atom } from "jotai"
import { CartItem } from "@/types"
export const cartAtom = atom<CartItem[]>([])
