// src/components/ProductListing.tsx
"use client";

import React from "react";
import { productData } from "@/data/products";
import ProductCard from "./ProductCard";

type Props = {
  selectedCategory: "gold" | "silver";
  selectedSubcategory: string;
};

export default function ProductListing({
  selectedCategory,
  selectedSubcategory,
}: Props) {
  const products = productData[selectedCategory][selectedSubcategory] ?? [];

  if (!products.length) {
    return (
      <div className="p-6 text-gray-500">
        No products in “{selectedSubcategory}”.
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} category={selectedCategory} />
      ))}
    </div>
  );
}
