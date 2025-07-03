// src/components/CategorySelect.tsx
"use client";

import React from "react";
import { productData } from "@/data/products";
import { useRouter } from "next/navigation";

type Props = {
  selectedCategory: "gold" | "silver";
  setSelectedCategory: (c: "gold" | "silver") => void;
  selectedSubcategory: string;
  setSelectedSubcategory: (s: string) => void;
  disableCategoryChange?: boolean;
};

export default function CategorySelect({
  selectedCategory,
  setSelectedCategory,
  selectedSubcategory,
  setSelectedSubcategory,
  disableCategoryChange ,
}: Props) {
  const router = useRouter();
  const subcategories = Object.keys(productData[selectedCategory]);

  return (
    <div className="space-y-5 p-4 bg-white rounded shadow-md">
      
      {/* category toggle */}
      {!disableCategoryChange && (
        <div className="flex space-x-2">
          {(["gold", "silver"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                router.push(`/products/${cat}`);
              }}
              className={`px-3 py-1 rounded ${
                cat === selectedCategory
                  ? "bg-black text-white"
                  : "bg-gray-200"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      {/* subcategory buttons */}

      <div className="flex flex-wrap gap-4 lg-row lg:flex-col max-w-xs mx-auto">
  <p className="w-full font-semibold mb-2">Types</p>
  {subcategories.map((sub) => (
    <button
      key={sub}
      onClick={() => setSelectedSubcategory(sub)}
      className={`px-4 py-2 rounded capitalize transition-colors duration-200 ${
        sub === selectedSubcategory
          ? "bg-black text-white"
          : "bg-gray-200 hover:bg-gray-300"
      }`}
    >
      {sub}
    </button>
  ))}
</div>


    </div>
  );
}
