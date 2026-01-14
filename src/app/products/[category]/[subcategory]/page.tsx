// app/products/[category]/[subcategory]/page.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import CatagorySelect from "@/components/productspage/CatagorySelect";
import ProductListing from "@/components/productspage/ProductListing";
import { productData, Category, Subcategory } from "@/data/products";

export default function ProductListBySubcategory() {
  const router  = useRouter();
  const params  = useParams();

  const category     = params.category     as Category;
  const subcategory  = params.subcategory  as Subcategory;

  // 🟢 call hooks first ‑‑ every render
  const [selectedSubcategory, setSelectedSubcategory] = useState<Subcategory>(subcategory);

  // then do any early exit
  const isValid = productData[category]?.[subcategory];
  if (!isValid) {
    return (
      <div className="p-6 text-red-500 text-center">
        Invalid category or subcategory.
      </div>
    );
  }

  const handleSubcatChange = (sc: Subcategory) =>
    router.push(`/products/${category}/${sc}`);

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <CatagorySelect
        selectedCategory={category}
        setSelectedCategory={(cat) =>
          router.push(`/products/${cat}/${selectedSubcategory}`)}
        selectedSubcategory={selectedSubcategory}
        setSelectedSubcategory={handleSubcatChange}
      />

      <ProductListing
        selectedCategory={category}
        selectedSubcategory={selectedSubcategory}
      />
    </div>
  );
}
