import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const CTA = () => {
  return (
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
  )
}

export default CTA
