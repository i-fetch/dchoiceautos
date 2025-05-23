import React from 'react'
import { ShieldCheck, Package, MapPin } from "lucide-react"
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

const ShippingCoverage = () => {
  return (
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

          <div
            className="relative h-[400px] rounded-lg overflow-hidden"
            style={{
              perspective: "1px",
              transformStyle: "preserve-3d",
              overflow: "hidden",
            }}
          >
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                transform: "translateZ(-1px) scale(2)",
                willChange: "transform",
              }}
            >
              <Image
                src="/parallax-03-2a9544a4.jpg"
                alt="Global Shipping Map"
                fill
                className="object-cover"
                style={{ objectPosition: "center" }}
                priority
              />
            </div>
            {/* Optional: Overlay content here */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShippingCoverage
