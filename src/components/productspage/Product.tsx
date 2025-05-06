"use client"

import React, { useState } from "react";
import { productData } from "@/data/products";
import CategorySelect from "./CatagorySelect";
import ProductListing from "./ProductListing";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState<"gold" | "silver">("gold");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("ring");

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Mobile layout (stacked) */}
      <div className="lg:hidden">
        <div className="mb-2">
          <CategorySelect
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSubcategory={selectedSubcategory}
            setSelectedSubcategory={setSelectedSubcategory}
          />
        </div>
        <div>
          <ProductListing
            selectedCategory={selectedCategory}
            selectedSubcategory={selectedSubcategory}
          />
        </div>
      </div>

      {/* Desktop layout (side by side) */}
      <div className="hidden lg:flex lg:space-x-6">
        <div className="w-1/4 sticky top-4 self-start">
          <CategorySelect
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSubcategory={selectedSubcategory}
            setSelectedSubcategory={setSelectedSubcategory}
          />
        </div>
        <div className="w-3/4 overflow-y-auto">
          <ProductListing
            selectedCategory={selectedCategory}
            selectedSubcategory={selectedSubcategory}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;