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
  disableCategoryChange = false,
}: Props) {
  const router = useRouter();
  const subcategories = Object.keys(productData[selectedCategory]);

  return (
    <div className="space-y-4">
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
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      {/* subcategory buttons */}
      <div className="flex flex-wrap gap-2">
        {subcategories.map((sub) => (
          <button
            key={sub}
            onClick={() => setSelectedSubcategory(sub)}
            className={`px-3 py-1 rounded capitalize ${
              sub === selectedSubcategory
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {sub}
          </button>
        ))}
      </div>
    </div>
  );
}
