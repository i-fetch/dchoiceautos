'use client'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { useToast } from "@/hooks/use-toast"
import { cars } from '../../lib/Cars'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

const FeatureCars = () => {
  const { toast } = useToast();

  const handleNonPremiumClick = () => {
    toast({
      title: "Premium Feature",
      description: "You must be a premium user to view car details.",
      variant: "destructive", // optional: choose styling variant
    })
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Cars</h2>
            <p className="text-lg text-muted-foreground">Explore our selection of premium vehicles</p>
          </div>
          <Button className="mt-4 md:mt-0" asChild>
            <Link href="/cars">View All Cars</Link>
          </Button>
        </div>

        <Carousel autoPlay loop>
          <CarouselContent className="-ml-2 md:-ml-4">
            {cars.map((car) => (
              <CarouselItem
                key={car.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <Card className="overflow-hidden car-card">
                  <div className="relative h-[200px] overflow-hidden">
                    <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" />
                    {car.badge && <Badge className="absolute top-2 right-2 bg-primary">{car.badge}</Badge>}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">{car.name}</h3>
                    <p className="text-primary font-semibold text-lg mb-4">{car.price}</p>
                    <Button className="w-full" onClick={handleNonPremiumClick}>
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

export default FeatureCars
