import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'


const ShippingRates = () => {
  return (
     <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shipping Rates</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent and competitive shipping rates for all your needs
            </p>
          </div>

          <Tabs defaultValue="domestic" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="domestic">Domestic Shipping</TabsTrigger>
              <TabsTrigger value="international">International Shipping</TabsTrigger>
            </TabsList>

            <TabsContent value="domestic" className="mt-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-100 dark:bg-slate-700">
                    <tr>
                      <th className="px-6 py-3 text-left">Weight</th>
                      <th className="px-6 py-3 text-left">Standard (3-5 days)</th>
                      <th className="px-6 py-3 text-left">Express (1-2 days)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    <tr>
                      <td className="px-6 py-4">Up to 1 kg</td>
                      <td className="px-6 py-4">$9.99</td>
                      <td className="px-6 py-4">$19.99</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">1-5 kg</td>
                      <td className="px-6 py-4">$14.99</td>
                      <td className="px-6 py-4">$24.99</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">5-10 kg</td>
                      <td className="px-6 py-4">$19.99</td>
                      <td className="px-6 py-4">$29.99</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">10-20 kg</td>
                      <td className="px-6 py-4">$29.99</td>
                      <td className="px-6 py-4">$39.99</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Over 20 kg</td>
                      <td className="px-6 py-4">Custom Quote</td>
                      <td className="px-6 py-4">Custom Quote</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="international" className="mt-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-100 dark:bg-slate-700">
                    <tr>
                      <th className="px-6 py-3 text-left">Region</th>
                      <th className="px-6 py-3 text-left">Standard (7-14 days)</th>
                      <th className="px-6 py-3 text-left">Express (3-5 days)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    <tr>
                      <td className="px-6 py-4">North America</td>
                      <td className="px-6 py-4">$29.99</td>
                      <td className="px-6 py-4">$49.99</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Europe</td>
                      <td className="px-6 py-4">$39.99</td>
                      <td className="px-6 py-4">$59.99</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Asia</td>
                      <td className="px-6 py-4">$44.99</td>
                      <td className="px-6 py-4">$64.99</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Australia/Oceania</td>
                      <td className="px-6 py-4">$49.99</td>
                      <td className="px-6 py-4">$69.99</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Other Regions</td>
                      <td className="px-6 py-4">Custom Quote</td>
                      <td className="px-6 py-4">Custom Quote</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-8 text-muted-foreground">
            <p>* Additional fees may apply for remote locations or special handling requirements.</p>
            <p>
              * For bulk orders or special shipping arrangements, please{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
  )
}

export default ShippingRates
