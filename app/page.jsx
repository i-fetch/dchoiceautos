import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Car, Wrench, Truck, ShieldCheck, Clock, ThumbsUp, Award, ChevronRight } from "lucide-react"
import FeatureCars from "@/components/Features/FeatureCars"
import PopularParts from "@/components/PopularParts/PopularParts"
import ShopPartCatalog from "@/components/ShopPartCatalog/ShopPartCatalog"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-white">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Premium Cars & Parts at Your Fingertips</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Discover our extensive collection of luxury vehicles and high-quality spare parts with reliable shipping
              services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/cars">Explore Cars</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <Link href="/spare-parts">Browse Parts</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of automotive services to meet all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="feature-card transition-all duration-300">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Car className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Premium Cars</h3>
                <p className="text-muted-foreground mb-4">
                  Explore our collection of luxury and performance vehicles from top manufacturers.
                </p>
                <Link href="/cars" className="text-primary font-medium inline-flex items-center">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="feature-card transition-all duration-300">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Spare Parts</h3>
                <p className="text-muted-foreground mb-4">
                  Find genuine and aftermarket parts for all makes and models at competitive prices.
                </p>
                <Link href="/spare-parts" className="text-primary font-medium inline-flex items-center">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="feature-card transition-all duration-300">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reliable Shipping</h3>
                <p className="text-muted-foreground mb-4">
                  Fast and secure shipping services to deliver your purchases to your doorstep.
                </p>
                <Link href="/shipping" className="text-primary font-medium inline-flex items-center">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ShopPartCatalog */}
      <ShopPartCatalog />

      {/* Featured Cars Section */}
      <FeatureCars />

      {/* Popular Parts Section */}
      <PopularParts />

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AutoElite</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are committed to providing exceptional service and products to our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck className="h-10 w-10 text-primary" />,
                title: "Quality Guarantee",
                description: "All our products come with a quality guarantee for your peace of mind.",
              },
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "Fast Delivery",
                description: "We ensure quick and reliable delivery of all your orders.",
              },
              {
                icon: <ThumbsUp className="h-10 w-10 text-primary" />,
                title: "Customer Satisfaction",
                description: "Our customers' satisfaction is our top priority in everything we do.",
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Expert Support",
                description: "Our team of experts is always ready to assist you with any queries.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enhance Your Driving Experience?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Explore our collection of premium cars and high-quality spare parts today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link href="/cars">Explore Cars</Link>
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link href="/spare-parts">Browse Parts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
