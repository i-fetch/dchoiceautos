import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, ChevronDown, Star } from "lucide-react"

export default function CarsPage() {
  // Sample car data
  const cars = [
    {
      id: 1,
      name: "Luxury Sedan 2025",
      price: "$75,000",
      image: "/placeholder.svg?height=300&width=500",
      category: "sedan",
      badge: "New Arrival",
      rating: 5,
      features: ["Automatic", "Petrol", "5 Seats", "GPS"],
    },
    {
      id: 2,
      name: "Premium SUV",
      price: "$85,000",
      image: "/placeholder.svg?height=300&width=500",
      category: "suv",
      badge: "Best Seller",
      rating: 4.5,
      features: ["Automatic", "Diesel", "7 Seats", "360° Camera"],
    },
    {
      id: 3,
      name: "Sports Coupe",
      price: "$95,000",
      image: "/placeholder.svg?height=300&width=500",
      category: "sports",
      badge: "Limited Edition",
      rating: 5,
      features: ["Manual", "Petrol", "2 Seats", "Sport Mode"],
    },
    {
      id: 4,
      name: "Electric Sedan",
      price: "$80,000",
      image: "/placeholder.svg?height=300&width=500",
      category: "sedan",
      badge: "Eco-Friendly",
      rating: 4.8,
      features: ["Automatic", "Electric", "5 Seats", "Autopilot"],
    },
    {
      id: 5,
      name: "Compact SUV",
      price: "$65,000",
      image: "/placeholder.svg?height=300&width=500",
      category: "suv",
      rating: 4.2,
      features: ["Automatic", "Hybrid", "5 Seats", "Parking Assist"],
    },
    {
      id: 6,
      name: "Convertible Roadster",
      price: "$110,000",
      image: "/placeholder.svg?height=300&width=500",
      category: "sports",
      badge: "Premium",
      rating: 4.9,
      features: ["Manual", "Petrol", "2 Seats", "Convertible Roof"],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Premium Cars</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Discover our extensive collection of luxury vehicles, from elegant sedans to powerful SUVs and sporty
            coupes.
          </p>
        </div>
      </section>

      {/* Cars Catalog */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Filters and Sorting */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                Price Range
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                Year
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                Newest First
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Car Categories */}
          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="sedan">Sedan</TabsTrigger>
              <TabsTrigger value="suv">SUV</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            </TabsContent>

            {["sedan", "suv", "sports"].map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cars
                    .filter((car) => car.category === category)
                    .map((car) => (
                      <CarCard key={car.id} car={car} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-100 dark:bg-slate-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you find the perfect vehicle that meets your needs and preferences.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function CarCard({ car }) {
  return (
    <Card className="overflow-hidden car-card">
      <div className="relative h-[220px] overflow-hidden">
        <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" />
        {car.badge && <Badge className="absolute top-2 right-2 bg-primary">{car.badge}</Badge>}
      </div>
      <CardContent className="p-6">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(car.rating)
                  ? "text-yellow-500 fill-yellow-500"
                  : i < car.rating
                    ? "text-yellow-500 fill-yellow-500 opacity-50"
                    : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">{car.rating.toFixed(1)}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{car.name}</h3>
        <p className="text-primary font-semibold text-lg mb-3">{car.price}</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {car.features.map((feature, index) => (
            <span
              key={index}
              className="text-sm text-muted-foreground bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <Button className="flex-1">View Details</Button>
          <Button variant="outline" className="flex-1">
            Test Drive
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
