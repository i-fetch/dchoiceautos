import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import Image from 'next/image'
import { Card, CardContent } from '../ui/card'
import { ShoppingBag, Heart, Eye, Shuffle } from 'lucide-react'

const partIcons = {
  engine: <ShoppingBag className="w-5 h-5 text-primary" />,
  brakes: <Shuffle className="w-5 h-5 text-primary" />,
  suspension: <Eye className="w-5 h-5 text-primary" />,
  electrical: <Heart className="w-5 h-5 text-primary" />,
}

// Example spare parts data by category
const spareParts = {
  engine: [
    {
      name: "Turbocharger",
      image: "/spare-parts/turbochanger.jpg",
    },
    {
      name: "Engine Model",
      image: "/spare-parts/engine-model.jpg",
    },
    {
      name: "Engine Pistons",
      image: "/spare-parts/engine-pistons.jpg",
    },
    {
      name: "High Performance Oil Filter",
      image: "/spare-parts/high-performance-oil-filter.png",
    },
  ],
  brakes: [
    {
      name: "Brake Caliper Kit",
      image: "/spare-parts/brake-caliper-kit.png",
    },
    {
      name: "Brake Disc",
      image: "/spare-parts/brake-disc.jpg",
    },
    {
      name: "Brake Rotors Paired",
      image: "/spare-parts/brake-rotors-paired.png",
    },
    {
      name: "Premium Brake Pads",
      image: "/spare-parts/premium-brake-pads.png",
    },
  ],
  suspension: [
    {
      name: "Mag Wheels",
      image: "/spare-parts/magwheels.jpg",
    },
    {
      name: "Custom Seats Covers",
      image: "/spare-parts/custom-seats-covers.png",
    },
    {
      name: "Flood Beam Auxillary",
      image: "/spare-parts/flood-beam-auxillary.jpg",
    },
    {
      name: "Steering",
      image: "/spare-parts/steering.jpg",
    },
  ],
  electrical: [
    {
      name: "Alternator",
      image: "/spare-parts/alternator.jpg",
    },
    {
      name: "Starter Motor",
      image: "/spare-parts/starter-motor.png",
    },
    {
      name: "Spark Plug Set",
      image: "/spare-parts/spark-plug-set.png",
    },
    {
      name: "Head Light",
      image: "/spare-parts/head-light.jpg",
    },
  ],
}

const PopularParts = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Popular Spare Parts</h2>
            <p className="text-lg text-muted-foreground">High-quality parts for all makes and models</p>
          </div>
          <Button className="mt-4 md:mt-0" asChild>
            <Link href="/spare-parts">View All Parts</Link>
          </Button>
        </div>

        <Tabs defaultValue="engine" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="engine">Engine</TabsTrigger>
            <TabsTrigger value="brakes">Brakes</TabsTrigger>
            <TabsTrigger value="suspension">Suspension</TabsTrigger>
            <TabsTrigger value="electrical">Electrical</TabsTrigger>
          </TabsList>

          {Object.entries(spareParts).map(([category, parts]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div
                id="product-list"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {parts.map((part, idx) => (
                  <Card key={idx} className="overflow-hidden group relative">
                    <div className="relative h-40 overflow-hidden rounded-t">
                      <Image
                        src={part.image}
                        alt={part.name}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
                        <button className="bg-white rounded-full p-2 shadow hover:bg-primary hover:text-white" title="Add to Cart">
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                        <button className="bg-white rounded-full p-2 shadow hover:bg-rose-500 hover:text-white" title="Wishlist">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="bg-white rounded-full p-2 shadow hover:bg-blue-500 hover:text-white" title="Quickview">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="bg-white rounded-full p-2 shadow hover:bg-green-500 hover:text-white" title="Compare">
                          <Shuffle className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-1">
                        {/* {partIcons[category]} */}
                        <h3 className="font-semibold">{part.name}</h3>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(5)].map((_,  i) => (
                          <span key={i} className="text-yellow-400 text-xs">&#9733;</span>
                        ))}
                      </div>
                      <div className="font-medium text-primary mb-2">${(Math.random() * 500 + 50).toFixed(2)}</div>
                      <Button size="sm" className="w-full">
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default PopularParts