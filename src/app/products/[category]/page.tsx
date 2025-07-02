"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import CategorySelect from "@/components/productspage/CatagorySelect";
import ProductListing from "@/components/productspage/ProductListing";

export default function ProductListByCategory() {
  const router = useRouter();
  const { category } = useParams<{ category?: string }>(); // category can be undefined on first render

  // ✅ 1. CALL HOOKS UNCONDITIONALLY
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("ring");

  // ✅ 2. NOW DO ANY EARLY EXIT / CONDITIONAL RENDER
  if (category !== "gold" && category !== "silver") {
    return (
      <div className="p-6 text-red-500 text-center">
        Invalid category.
      </div>
    );
  }

  /* ————————————————————  regular render ———————————————————— */
  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      {/* mobile */}
      <div className="lg:hidden">
        <CategorySelect
          selectedCategory={category}
          setSelectedCategory={(cat) => router.push(`/products/${cat}`)}
          selectedSubcategory={selectedSubcategory}
          setSelectedSubcategory={setSelectedSubcategory}
          disableCategoryChange ={false}
        />
        <ProductListing
          selectedCategory={category}
          selectedSubcategory={selectedSubcategory}
        />
      </div>

      {/* desktop */}
      <div className="hidden lg:flex lg:space-x-6">
        <div className="w-1/4 sticky top-4 self-start">
          <CategorySelect
            selectedCategory={category}
            setSelectedCategory={(cat) => router.push(`/products/${cat}`)}
            selectedSubcategory={selectedSubcategory}
            setSelectedSubcategory={setSelectedSubcategory}
            disableCategoryChange ={false} // allow category change on desktop
          />
        </div>
        <div className="w-3/4 overflow-y-auto">
          <ProductListing
            selectedCategory={category}
            selectedSubcategory={selectedSubcategory}
          />
        </div>
      </div>
    </div>
  );
}
