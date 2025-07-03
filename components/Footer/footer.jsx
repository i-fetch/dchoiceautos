import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              D<span className="text-primary">Dchoic3autos</span>
            </h3>
            <p className="text-slate-300 mb-4">
              Your one-stop destination for premium cars, spare parts, and reliable shipping services.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cars" className="text-slate-300 hover:text-primary transition-colors">
                  Cars
                </Link>
              </li>
              <li>
                <Link href="/spare-parts" className="text-slate-300 hover:text-primary transition-colors">
                  Spare Parts
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-slate-300 hover:text-primary transition-colors">
                  Shipping Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-slate-300">United State, California</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-slate-300">+15106168406</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />

                <span className="text-slate-300">dchoic3autos@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-slate-300 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 border-slate-700 text-white"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Dchoic3autos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
