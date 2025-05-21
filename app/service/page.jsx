import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Truck, Clock, Globe, ShieldCheck, Package, MapPin, ArrowRight } from "lucide-react"

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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Global Shipping Coverage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We ship to over 100 countries worldwide, ensuring that our customers can receive their orders no matter
                where they are located.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Secure Packaging</h3>
                    <p className="text-muted-foreground">
                      All items are carefully packaged to ensure they arrive in perfect condition.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Order Tracking</h3>
                    <p className="text-muted-foreground">
                      Track your shipment in real-time with our advanced tracking system.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Delivery Notifications</h3>
                    <p className="text-muted-foreground">
                      Receive notifications about your shipment status and delivery updates.
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" asChild>
                <Link href="/contact">Contact for Special Shipping</Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/parallax-03-2a9544a4.jpg"
                alt="Global Shipping Map"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Rates */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shipping Rates</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent and competitive shipping rates for all your needs
            </p>
          </div>

          <Tabs defaultValue="domestic" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="domestic">Domestic Shipping</TabsTrigger>
              <TabsTrigger value="international">International Shipping</TabsTrigger>
            </TabsList>

            <TabsContent value="domestic" className="mt-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-100 dark:bg-slate-700">
                    <tr>
                      <th className="px-6 py-3 text-left">Weight</th>
                      <th className="px-6 py-3 text-left">Standard (3-5 days)</th>
                      <th className="px-6 py-3 text-left">Express (1-2 days)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    <tr>
                      <td className="px-6 py-4">Up to 1 kg</td>
                      <td className="px-6 py-4">$9.99</td>
                      <td className="px-6 py-4">$19.99</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">1-5 kg</td>
                      <td className="px-6 py-4">$14.99</td>
                      <td className="px-6 py-4">$24.99</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">5-10 kg</td>
                      <td className="px-6 py-4">$19.99</td>
                      <td className="px-6 py-4">$29.99</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">10-20 kg</td>
                      <td className="px-6 py-4">$29.99</td>
                      <td className="px-6 py-4">$39.99</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Over 20 kg</td>
                      <td className="px-6 py-4">Custom Quote</td>
                      <td className="px-6 py-4">Custom Quote</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="international" className="mt-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-100 dark:bg-slate-700">
                    <tr>
                      <th className="px-6 py-3 text-left">Region</th>
                      <th className="px-6 py-3 text-left">Standard (7-14 days)</th>
                      <th className="px-6 py-3 text-left">Express (3-5 days)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    <tr>
                      <td className="px-6 py-4">North America</td>
                      <td className="px-6 py-4">$29.99</td>
                      <td className="px-6 py-4">$49.99</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Europe</td>
                      <td className="px-6 py-4">$39.99</td>
                      <td className="px-6 py-4">$59.99</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Asia</td>
                      <td className="px-6 py-4">$44.99</td>
                      <td className="px-6 py-4">$64.99</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Australia/Oceania</td>
                      <td className="px-6 py-4">$49.99</td>
                      <td className="px-6 py-4">$69.99</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Other Regions</td>
                      <td className="px-6 py-4">Custom Quote</td>
                      <td className="px-6 py-4">Custom Quote</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-8 text-muted-foreground">
            <p>* Additional fees may apply for remote locations or special handling requirements.</p>
            <p>
              * For bulk orders or special shipping arrangements, please{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our shipping services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long will it take to receive my order?",
                answer:
                  "Delivery times depend on your location and the shipping method you choose. Standard domestic shipping typically takes 3-5 business days, while express shipping takes 1-2 business days. International shipping can take 7-14 business days depending on the destination.",
              },
              {
                question: "Do you ship internationally?",
                answer:
                  "Yes, we ship to over 100 countries worldwide. International shipping rates vary based on destination and package weight. You can view our international shipping rates in the shipping rates section.",
              },
              {
                question: "How can I track my order?",
                answer:
                  "Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track your package on our website or through the carrier's tracking system.",
              },
              {
                question: "What if my order is damaged during shipping?",
                answer:
                  "We take great care in packaging our products to prevent damage during transit. However, if your order arrives damaged, please contact our customer service team within 48 hours of delivery with photos of the damaged items, and we will arrange for a replacement.",
              },
              {
                question: "Do you offer free shipping?",
                answer:
                  "We offer free standard shipping on domestic orders over $200. Special promotions with free shipping may be available periodically throughout the year.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Place Your Order?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Explore our collection of premium cars and high-quality spare parts with reliable shipping services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link href="/cars">Shop Cars</Link>
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link href="/spare-parts">Shop Parts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
