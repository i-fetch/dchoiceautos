import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Award, ThumbsUp, TrendingUp, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Dchoice</h1>
            <p className="text-lg text-gray-300 mb-6">
              Your trusted partner in the automotive industry, providing premium cars, quality spare parts, and reliable
              shipping services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2005, Dchoice began as a small car dealership with a vision to revolutionize the automotive
                industry by providing premium vehicles and exceptional customer service.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Over the years, we expanded our services to include high-quality spare parts and reliable shipping,
                becoming a one-stop destination for all automotive needs. Our commitment to quality and customer
                satisfaction has made us a trusted name in the industry.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, Dchoice serves thousands of customers worldwide, maintaining the same dedication to excellence
                that has been our hallmark since day one.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/headquarter.jpg?height=400&width=600"
                alt="Dchoice Headquarters"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Driving excellence in the automotive industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Award className="h-6 w-6 text-primary mr-2" />
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                To provide our customers with premium automotive products and services that exceed expectations,
                delivered with integrity, expertise, and a commitment to excellence.
              </p>
              <ul className="space-y-2">
                {[
                  "Offer the highest quality vehicles and parts",
                  "Provide exceptional customer service",
                  "Maintain transparent and fair pricing",
                  "Ensure reliable and timely shipping",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 text-primary mr-2" />
                Our Vision
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                To be the global leader in the automotive industry, recognized for our innovation, quality, and
                customer-centric approach, while driving positive change in the industry.
              </p>
              <ul className="space-y-2">
                {[
                  "Lead the industry in customer satisfaction",
                  "Expand our global presence and accessibility",
                  "Innovate and adapt to changing market needs",
                  "Promote sustainable and responsible practices",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-primary" />,
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect of our business, from the products we offer to the services we provide.",
              },
              {
                icon: <ThumbsUp className="h-12 w-12 text-primary" />,
                title: "Integrity",
                description:
                  "We conduct our business with honesty, transparency, and ethical practices, building trust with our customers and partners.",
              },
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: "Customer Focus",
                description:
                  "Our customers are at the heart of everything we do. We are committed to understanding and meeting their needs.",
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-primary" />,
                title: "Innovation",
                description:
                  "We continuously seek new ways to improve our products, services, and processes to stay ahead in the industry.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The experienced professionals driving our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "John Smith",
                position: "CEO & Founder",
                image: "/john.jpg?height=300&width=300",
              },
              {
                name: "Sarah Johnson",
                position: "COO",
                image: "/sarah.jpg?height=300&width=300",
              },
              {
                name: "Michael Brown",
                position: "Head of Sales",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emily Davis",
                position: "Customer Service Director",
                image: "/emily.jpg?height=300&width=300",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md">
                <div className="relative h-[250px]">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones that mark our journey of excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary"></div>
              <div className="space-y-8">
                {[
                  {
                    year: "2005",
                    title: "Company Founded",
                    description: "Dchoice was established as a small car dealership with a vision for excellence.",
                  },
                  {
                    year: "2010",
                    title: "Expansion to Spare Parts",
                    description: "Added a comprehensive range of high-quality spare parts to our offerings.",
                  },
                  {
                    year: "2015",
                    title: "International Shipping",
                    description: "Launched our international shipping services to reach customers worldwide.",
                  },
                ].map((achievement, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-3 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 mt-1"></div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
                      <span className="text-primary font-bold">{achievement.year}</span>
                      <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary"></div>
              <div className="space-y-8">
                {[
                  {
                    year: "2018",
                    title: "Industry Recognition",
                    description:
                      "Received the 'Excellence in Automotive Services' award for our commitment to quality.",
                  },
                  {
                    year: "2020",
                    title: "Digital Transformation",
                    description: "Launched our e-commerce platform to enhance customer experience and accessibility.",
                  },
                  {
                    year: "2023",
                    title: "Global Expansion",
                    description: "Expanded our operations to serve customers in over 100 countries worldwide.",
                  },
                ].map((achievement, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-3 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 mt-1"></div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
                      <span className="text-primary font-bold">{achievement.year}</span>
                      <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the Dchoice Family</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Experience the difference of working with a company that values quality, integrity, and customer
            satisfaction.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
