import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Clock, Globe, ArrowRight } from "lucide-react"
import CTA from "@/components/CTA/CTA"
import FAQ from "@/components/FAQ/FAQ"
import ShippingRates from "@/components/ShippingRates/ShippingRates"
import ShippingCoverage from "@/components/ShippingCoverage/ShippingCoverage"

export default function ShippingPage() {
  // Sample shipping services
  const shippingServices = [
    {
      id: "standard",
      name: "Standard Shipping",
      price: "$9.99",
      time: "3-5 business days",
      icon: <Truck className="h-10 w-10 text-primary" />,
    },
    {
      id: "express",
      name: "Express Shipping",
      price: "$19.99",
      time: "1-2 business days",
      icon: <Clock className="h-10 w-10 text-primary" />,
    },
    {
      id: "international",
      name: "International Shipping",
      price: "From $29.99",
      time: "7-14 business days",
      icon: <Globe className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Reliable Shipping Services</h1>
            <p className="text-lg text-gray-300 mb-6">
              Fast and secure shipping services to deliver your purchases to your doorstep at affordable prices.
            </p>
            <Button size="lg" asChild>
              <a href="#shipping-options">View Shipping Options</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Shipping Options */}
      <section id="shipping-options" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Shipping Options</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the shipping option that best suits your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shippingServices.map((service) => (
              <Card key={service.id} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-primary font-semibold text-lg mb-2">{service.price}</p>
                  <p className="text-muted-foreground mb-6">{service.time}</p>
                  <Button className="w-full">Select</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Our Shipping Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make shipping your purchases simple and hassle-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Place Your Order",
                description: "Select your products and proceed to checkout.",
              },
              {
                step: 2,
                title: "Choose Shipping",
                description: "Select your preferred shipping method.",
              },
              {
                step: 3,
                title: "Processing",
                description: "We prepare your order for shipment.",
              },
              {
                step: 4,
                title: "Delivery",
                description: "Your order is delivered to your doorstep.",
              },
            ].map((stepObj, idx) => (
              <div key={stepObj.step} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                    {stepObj.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{stepObj.title}</h3>
                  <p className="text-center text-sm text-muted-foreground">{stepObj.description}</p>
                </div>
                {stepObj.step < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full transform -translate-x-1/2">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Coverage */}
      <ShippingCoverage />

      {/* Shipping Rates */}
      <ShippingRates />

      {/* FAQ Section */}
      <FAQ />
      {/* CTA Section */}
      <CTA />
    </div>
  )
}
