import React from "react"
import Link from "next/link"

const categories = [
  { name: "Body shell", img: "/categories/body-shell.png" },
  { name: "Plug supports", img: "/categories/radiator-support.png" },
  { name: "Quality tyre", img: "/categories/front-bumper.png" },
  { name: "Hood or bonnet", img: "/categories/hood-or-bonnet.png" },
  { name: "Piston", img: "/categories/door-handle.png" },
  { name: "Important Vehicle parts", img: "/categories/number-plate.png" },
]

const ShopPartCatalog = () => (
  <div className="box-content py-10 bg-white dark:bg-slate-900">
    <div className="container mx-auto px-4">
      <div className="mb-6">
        <h3 className="text-2xl font-bold">Shop by Categories</h3>
      </div>
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto">
          <div className="flex gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className=" min-w-[180px]">
                <div className="bg-slate-50 pt-5 dark:bg-slate-800 rounded-lg shadow hover:shadow-lg transition">
                  <Link href="#">
                    <img src={cat.img} alt={cat.name} className="w-full h-32 object-contain rounded-t-lg" />
                  </Link>
                  <div className="text-center py-3">
                    <h4 className="cat-title font-semibold">
                      <Link href="#">{cat.name}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ShopPartCatalog