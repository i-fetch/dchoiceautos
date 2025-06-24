'use client';

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ViewDetailsButton from "@/components/ViewDetails";

export default function SpareParts({ categories, parts, brands }) {
  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const brandVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const brandsRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const isGridInView = useInView(gridRef, { once: true, margin: "-50px" });
  const isBrandsInView = useInView(brandsRef, { once: true, margin: "-50px" });

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        variants={heroVariants}
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        className="bg-slate-900 text-white py-8 md:py-16"
      >
        <div className="container mx-auto px-4">
          <motion.h1 variants={heroVariants} className="text-2xl md:text-4xl font-bold mb-4">
            Quality Spare Parts
          </motion.h1>
          <motion.p variants={heroVariants} className="text-base md:text-lg text-gray-300 max-w-2xl">
            Find genuine and aftermarket parts for all makes and models at competitive prices.
          </motion.p>
        </div>
      </motion.section>

      {/* Parts Catalog */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <motion.div
            ref={gridRef}
            variants={gridVariants}
            initial="hidden"
            animate={isGridInView ? "visible" : "hidden"}
            className="w-full"
          >
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="flex flex-wrap justify-start md:justify-center border mb-6">
                <TabsTrigger value="all">All Parts</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="bestsellers">Best Sellers</TabsTrigger>
                <TabsTrigger value="new">New Arrivals</TabsTrigger>
              </TabsList>

              {["all", "featured", "bestsellers", "new"].map((tab) => (
                <TabsContent key={tab} value={tab} className="mt-0">
                  <motion.div
                    variants={gridVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                  >
                    {parts
                      .filter((part) => {
                        if (tab === "all") return true;
                        if (tab === "featured") return part.isFeatured || !!part.discount;
                        if (tab === "bestsellers") return part.isBestSeller;
                        if (tab === "new") return part.isNewArrival;
                        return false;
                      })
                      .map((part) => (
                        <PartCard key={part._id} part={part} />
                      ))}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Featured Brands */}
      <motion.section
        ref={brandsRef}
        className="py-8 md:py-12 bg-slate-100 dark:bg-slate-800"
        variants={gridVariants}
        initial="hidden"
        animate={isBrandsInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={brandVariants}
            className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center"
          >
            Featured Brands
          </motion.h2>
          <motion.div
            variants={gridVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {brands.map((brand) => (
              <motion.div
                key={brand}
                variants={brandVariants}
                className="p-4 flex flex-col items-center"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-3 overflow-hidden">
                  <Image
                    src={`/${brand.toLowerCase()}.png`}
                    alt={brand}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <span className="text-muted-foreground text-sm md:text-base font-medium">
                  {brand}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

function PartCard({ part }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Card className="overflow-hidden">
        <div className="relative h-[180px]">
          <Image
            src={part.image || "/placeholder.svg"}
            alt={part.name}
            fill
            className="object-cover"
          />
          {part.isFeatured && (
            <Badge className="absolute top-2 right-2 bg-blue-500">Featured</Badge>
          )}
          {part.isBestSeller && (
            <Badge className="absolute top-2 right-2 bg-yellow-400">Best Seller</Badge>
          )}
          {part.isNewArrival && (
            <Badge className="absolute top-2 right-2 bg-green-400">New Arrival</Badge>
          )}
          {part.discount && (
            <Badge className="absolute top-2 left-2 bg-red-400">{part.discount}</Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-center text-sm md:text-base mb-1">
            {part.name}
          </h3>
          <p className="text-primary font-medium text-center mb-3">{part.price}</p>
          <div className="flex gap-2">
            <ViewDetailsButton
              message={`Premium users can view details for ${part.name}`}
              className="flex-1 h-9 text-sm bg-red-400"
            />
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
                <path d="M20.84 4.61l-1.79-1.79a2.25 2.25 0 0 0-3.18 0L3 16.69V21h4.31L20.84 7.61a2.25 2.25 0 0 0 0-3.18z" />
              </svg>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
