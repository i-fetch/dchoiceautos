'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Car,
  Wrench,
  Truck,
  ShieldCheck,
  Clock,
  ThumbsUp,
  Award,
  ChevronRight,
} from 'lucide-react';
import FeatureCars from '@/components/Features/FeatureCars';
import PopularParts from '@/components/PopularParts/PopularParts';
import ShopPartCatalog from '@/components/ShopPartCatalog/ShopPartCatalog';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent mismatch by rendering only on client

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-white">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              variants={fadeUpVariant}
              transition={{ duration: 0.6 }}
            >
              Premium Cars & Parts at Your Fingertips
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 text-gray-200"
              variants={fadeUpVariant}
              transition={{ duration: 0.6 }}
            >
              Discover our extensive collection of luxury vehicles and high-quality spare parts with reliable shipping services.
            </motion.p>
            <motion.div className="flex flex-wrap gap-4" variants={fadeUpVariant}>
              <Button size="lg" asChild>
                <Link href="/login">Get Started </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <Link href="/spare-parts">Browse Parts</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              transition={{ duration: 0.6 }}
            >
              Our Premium Services
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              transition={{ duration: 0.6 }}
            >
              We offer a comprehensive range of automotive services to meet all your needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                Icon: Car,
                title: 'Premium Cars',
                description: 'Explore our collection of luxury and performance vehicles from top manufacturers.',
                href: '/cars',
              },
              {
                Icon: Wrench,
                title: 'Quality Spare Parts',
                description: 'Find genuine and aftermarket parts for all makes and models at competitive prices.',
                href: '/spare-parts',
              },
              {
                Icon: Truck,
                title: 'Reliable Shipping',
                description: 'Fast and secure shipping services to deliver your purchases to your doorstep.',
                href: '/shipping',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="feature-card transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <service.Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Link href={service.href} className="text-primary font-medium inline-flex items-center">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ShopPartCatalog */}
      <ShopPartCatalog />

      {/* Featured Cars Section */}
      <FeatureCars />

      {/* Popular Parts Section */}
      <PopularParts />

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Dchoiceautos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are committed to providing exceptional service and products to our customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck className="h-10 w-10 text-primary" />, title: 'Quality Guarantee', description: 'All our products come with a quality guarantee for your peace of mind.' },
              { icon: <Clock className="h-10 w-10 text-primary" />, title: 'Fast Delivery', description: 'We ensure quick and reliable delivery of all your orders.' },
              { icon: <ThumbsUp className="h-10 w-10 text-primary" />, title: 'Customer Satisfaction', description: "Our customers' satisfaction is our top priority in everything we do." },
              { icon: <Award className="h-10 w-10 text-primary" />, title: 'Expert Support', description: 'Our team of experts is always ready to assist you with any queries.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="bg-primary text-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enhance Your Driving Experience?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Explore our collection of premium cars and high-quality spare parts today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link href="/cars">Explore Cars</Link>
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link href="/spare-parts">Browse Parts</Link>
            </Button>
            
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
