"use client"
import { useSnapCarousel } from "react-snap-carousel"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Product } from "@/types"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

export function SnapCarousel({ product }: { product: Product }) {
  const {
    scrollRef,
    snapPointIndexes,
    next,
    prev,
    pages,
    goTo,
    activePageIndex,
  } = useSnapCarousel()
  return (
    <div>
      <ul
        className="flex snap-x snap-mandatory overflow-x-auto scrollbar-none"
        ref={scrollRef}
      >
        {product.otherImages.map((image, i) => (
          <li
            key={i}
            className="flex w-full shrink-0 justify-center"
            style={{
              scrollSnapAlign: snapPointIndexes.has(i) ? "start" : "",
            }}
          >
            <Image src={image} width="1092" height="750" alt="product" />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between " aria-hidden>
        <Button variant="ghost" onClick={() => prev()}>
          <ArrowLeft />
        </Button>
        <ul className="flex gap-1.5">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={cn(
                "h-2 w-2 rounded-full bg-black/20",
                activePageIndex === i && "scale-125 bg-black",
              )}
            />
          ))}
        </ul>
        <Button variant="ghost" onClick={() => next()}>
          <ArrowRight />
        </Button>
      </div>
    </div>
  )
}
