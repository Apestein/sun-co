import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ThemeToggle } from "@/components/theme-toggle"
import { Icons } from "@/components/icons"
import { ShoppingBag, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CartButton } from "@/components/cart-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sun Corp",
  description: "Demo app for dot.cards",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-screen flex-col antialiased",
          inter.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="border-b py-4">
            <div className="container flex items-center justify-between">
              <Icons.logo />
              <div className="space-x-3">
                <ThemeToggle />
                <CartButton />
              </div>
            </div>
          </header>
          <main className="container mb-12 md:mb-24">{children}</main>
          <footer className="mt-auto bg-neutral-800 py-4 text-white">
            <div className="container flex items-center justify-between gap-1.5">
              <Icons.logo />
              <p className="truncate text-xs text-white/60 md:text-sm">
                © 2023 dot.cards text task. All rights reserved
              </p>
              <div className="flex gap-1.5 md:gap-3">
                <Instagram />
                <Twitter />
                <Youtube />
              </div>
            </div>
          </footer>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
