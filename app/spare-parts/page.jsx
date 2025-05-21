import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, ChevronDown, ShoppingCart } from "lucide-react"

export default function SparePartsPage() {
  // Sample parts categories
  const categories = [
    { id: "engine", name: "Engine Parts" },
    { id: "brakes", name: "Brake System" },
    { id: "suspension", name: "Suspension" },
    { id: "electrical", name: "Electrical" },
    { id: "body", name: "Body Parts" },
    { id: "interior", name: "Interior" },
  ]

// Sample parts data
const parts = [
  {
    id: 1,
    name: "Premium Brake Pads",
    price: "$89.99",
    image: "/spare-parts/premium-brake-pads.png",
    category: "brakes",
    badge: "Best Seller",
    discount: "15% OFF",
    brand: "Brembo",
  },
  {
    id: 2,
    name: "Engine Oil Filter",
    price: "$24.99",
    image: "/spare-parts/high-performance-oil-filter.png",
    category: "engine",
    badge: "New Arrival",
    brand: "Bosch",
  },
  {
    id: 3,
    name: "Suspension Coil Springs",
    price: "$149.99",
    image: "/spare-parts/magwheels.jpg", // Closest match for suspension
    category: "suspension",
    discount: "10% OFF",
    brand: "Monroe",
  },
  {
    id: 4,
    name: "LED Headlight Assembly",
    price: "$299.99",
    image: "/spare-parts/head-light.jpg",
    category: "electrical",
    badge: "Premium",
    brand: "Denso",
  },
  {
    id: 5,
    name: "Front Bumper Cover",
    price: "$189.99",
    image: "/spare-parts/radiator.png", // Closest match for body/bumper
    category: "body",
    brand: "OEM",
  },
  {
    id: 6,
    name: "Leather Seat Covers",
    price: "$129.99",
    image: "/spare-parts/custom-seats-covers.png",
    category: "interior",
    badge: "Limited Stock",
    brand: "OEM",
  },
  {
    id: 7,
    name: "Spark Plug Set",
    price: "$49.99",
    image: "/spare-parts/spark-plug-set.png",
    category: "engine",
    brand: "Denso",
  },
  {
    id: 8,
    name: "Brake Rotors (Pair)",
    price: "$119.99",
    image: "/spare-parts/brake-rotors-paired.png",
    category: "brakes",
    discount: "20% OFF",
    brand: "Brembo",
  },
]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Quality Spare Parts</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Find genuine and aftermarket parts for all makes and models at competitive prices.
          </p>
        </div>
      </section>


      {/* Parts Catalog */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-slate-900 rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#all" className="block py-2 px-3 bg-primary/10 text-primary rounded-md font-medium">
                      All Parts
                    </Link>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link
                        href={`#${category.id}`}
                        className="block py-2 px-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4">Price Range</h3>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Min" type="number" className="w-24" />
                    <span>-</span>
                    <Input placeholder="Max" type="number" className="w-24" />
                    <Button size="sm">Apply</Button>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4">Brand</h3>
                  <div className="space-y-2">
                    {["OEM", "Bosch", "Denso", "Brembo", "Monroe"].map((brand) => (
                      <div key={brand} className="flex items-center">
                        <input type="checkbox" id={brand} className="mr-2" />
                        <label htmlFor={brand}>{brand}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Parts Grid */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="container mx-auto border mb-6">
                  <TabsTrigger value="all">All Parts</TabsTrigger>
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  <TabsTrigger value="bestsellers">Best Sellers</TabsTrigger>
                  <TabsTrigger value="new">New Arrivals</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {parts.map((part) => (
                      <PartCard key={part.id} part={part} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="featured" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {parts
                      .filter((part) => part.badge === "Premium" || part.discount)
                      .map((part) => (
                        <PartCard key={part.id} part={part} />
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="bestsellers" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {parts
                      .filter((part) => part.badge === "Best Seller")
                      .map((part) => (
                        <PartCard key={part.id} part={part} />
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="new" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {parts
                      .filter((part) => part.badge === "New Arrival")
                      .map((part) => (
                        <PartCard key={part.id} part={part} />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" disabled>
                    &lt;
                  </Button>
                  <Button variant="outline" size="sm" className="bg-primary text-white">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    &gt;
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* Featured Brands */}
<section className="py-12 bg-slate-100 dark:bg-slate-800">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl font-bold mb-8 text-center">Featured Brands</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {["OEM", "Bosch", "Denso", "Brembo", "Monroe"].map((brand) => (
        <div
          key={brand}
          className="p-6 flex flex-col items-center justify-center"
        >
          <div className="w-24 h-24 flex items-center justify-center mb-3 overflow-hidden">
            <Image
              src={`/${brand.toLowerCase()}.png`}
              alt={brand}
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          <span className="text-muted-foreground font-medium">{brand}</span>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  )
}

function PartCard({ part }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-[180px] overflow-hidden">
        <Image src={part.image || "/placeholder.svg"} alt={part.name} fill className="object-cover" />
        {part.badge && <Badge className="absolute top-2 right-2 bg-primary">{part.badge}</Badge>}
        {part.discount && <Badge className="absolute top-2 left-2 bg-green-600">{part.discount}</Badge>}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-1">{part.name}</h3>
        <p className="text-primary font-medium mb-3">{part.price}</p>
        <div className="flex gap-2">
          <Button className="flex-1 h-9">
            {/* <ShoppingCart className="h-4 w-4 mr-2" /> */}
            View details
          </Button>
          <Button variant="outline" size="icon" className="h-9 w-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
