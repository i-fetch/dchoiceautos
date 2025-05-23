import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <>
    {/* FAQ Section */}
<section className="py-16">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Find answers to common questions about our shipping services
      </p>
    </div>

    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full space-y-2">
        {[
          {
            question: "How long will it take to receive my order?",
            answer:
              "Delivery times depend on your location and the shipping method you choose. Standard domestic shipping typically takes 3-5 business days, while express shipping takes 1-2 business days. International shipping can take 7-14 business days depending on the destination.",
          },
          {
            question: "Do you ship internationally?",
            answer:
              "Yes, we ship to over 100 countries worldwide. International shipping rates vary based on destination and package weight. You can view our international shipping rates in the shipping rates section.",
          },
          {
            question: "How can I track my order?",
            answer:
              "Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track your package on our website or through the carrier's tracking system.",
          },
          {
            question: "What if my order is damaged during shipping?",
            answer:
              "We take great care in packaging our products to prevent damage during transit. However, if your order arrives damaged, please contact our customer service team within 48 hours of delivery with photos of the damaged items, and we will arrange for a replacement.",
          },
          {
            question: "Do you offer free shipping?",
            answer:
              "We offer free standard shipping on domestic orders over $200. Special promotions with free shipping may be available periodically throughout the year.",
          },
        ].map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
</section>
      
    </>
  )
}

export default FAQ
