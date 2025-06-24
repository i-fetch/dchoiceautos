"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ShoppingCart, Phone } from "lucide-react"
import { ThemeToggle } from "../theme-toggle"

const routes = [
  { href: "/", label: "Home" },
  { href: "/cars", label: "Cars" },
  { href: "/spare-parts", label: "Spare Parts" },
  { href: "/service", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      pathname === route.href ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl md:text-2xl">
              D<span className="text-primary">Choic3auto</span>
            </span>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === route.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center mr-4">
            <Phone className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium">+1 (800) 123-4567</span>
          </div>
          {/* <Link href="/cart">
            <Button variant="ghost" size="icon" aria-label="Shopping Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link> */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
