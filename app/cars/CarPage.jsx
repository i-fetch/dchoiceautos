'use client';

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Filter, Star, ChevronDown } from "lucide-react";
import ViewDetailsButton from "@/components/ViewDetails";

export default function CarPage({ cars = [] }) {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const heroRef = useRef(null);
  const catalogRef = useRef(null);
  const ctaRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const isCatalogInView = useInView(catalogRef, { once: true, margin: "-50px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  const categories = ["sedan", "suv", "ute", "ev"];

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        variants={sectionVariants}
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        className="bg-slate-900 text-white py-16"
      >
        <div className="container mx-auto px-4">
          <motion.h1 variants={sectionVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our Premium Cars
          </motion.h1>
          <motion.p variants={sectionVariants} className="text-lg text-gray-300 max-w-2xl">
            Discover our extensive collection of luxury vehicles, from elegant sedans to powerful SUVs and sporty coupes.
          </motion.p>
        </div>
      </motion.section>

      {/* Catalog Section */}
      <motion.section
        ref={catalogRef}
        variants={sectionVariants}
        initial="hidden"
        animate={isCatalogInView ? "visible" : "hidden"}
        className="py-12 md:py-16"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={sectionVariants}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
          >
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                Newest First
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-5">
              <TabsTrigger value="all">All</TabsTrigger>
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat}>
                  {cat.toUpperCase()}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* All Cars */}
            <TabsContent value="all" className="mt-6">
              <motion.div
                variants={gridVariants}
                initial="hidden"
                animate={isCatalogInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {cars.length ? (
                  cars.map((car) => (
                    <CarCard key={car._id} car={car} variants={cardVariants} />
                  ))
                ) : (
                  <p className="col-span-full text-center text-muted-foreground">
                    No cars available at the moment.
                  </p>
                )}
              </motion.div>
            </TabsContent>

            {/* Filtered by Category */}
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <motion.div
                  variants={gridVariants}
                  initial="hidden"
                  animate={isCatalogInView ? "visible" : "hidden"}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {cars.filter((car) => car.category?.toLowerCase() === category).length ? (
                    cars
                      .filter((car) => car.category?.toLowerCase() === category)
                      .map((car) => (
                        <CarCard key={car._id} car={car} variants={cardVariants} />
                      ))
                  ) : (
                    <p className="col-span-full text-center text-muted-foreground">
                      No {category.toUpperCase()} cars available.
                    </p>
                  )}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </motion.section>

      {/* Call-to-Action Section */}
      <motion.section
        ref={ctaRef}
        variants={sectionVariants}
        initial="hidden"
        animate={isCtaInView ? "visible" : "hidden"}
        className="bg-slate-100 dark:bg-slate-800 py-12"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 variants={sectionVariants} className="text-2xl md:text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </motion.h2>
          <motion.p variants={sectionVariants} className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you find the perfect vehicle that meets your needs and preferences.
          </motion.p>
          <motion.div variants={sectionVariants}>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

function CarCard({ car, variants }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Card className="overflow-hidden car-card">
        <div className="relative h-[220px] overflow-hidden">
          <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" />
          {car.badge && <Badge className="absolute top-2 right-2 bg-primary">{car.badge}</Badge>}
        </div>
        <CardContent className="p-6">
          {typeof car.rating === "number" && (
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
          )}
          <h3 className="text-xl font-bold mb-2">{car.name}</h3>
<p className="text-primary font-semibold text-lg mb-3">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(car.price)}
          </p>          {car.features && (
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
          )}
          <div className="flex gap-2">
            <ViewDetailsButton
              message={`Details viewed for ${car.name}!`}
              className="flex-1"
              variant="default"
            />
            <Button variant="outline" className="flex-1">
              Test Drive
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
