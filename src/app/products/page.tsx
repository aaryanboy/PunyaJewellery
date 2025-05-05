"use client"

import React, { useState } from "react";
import { productData } from "@/data/products";
import Image from 'next/image';

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<"gold" | "silver">("gold");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("ring");

  const categories = ["gold", "silver"] as const;
  const subcategories = Object.keys(productData[selectedCategory]);
  const products = productData[selectedCategory][selectedSubcategory] || [];

  return (
    <div className="container mx-auto p-4">
      {/* Category Selection */}
      <h2 className="text-xl font-semibold mb-2">Select Category:</h2>
      <div className="flex space-x-4 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setSelectedSubcategory(Object.keys(productData[category])[0]);
            }}
            className={`px-4 py-2 rounded transition-colors duration-200 ${
              selectedCategory === category
                ? "bg-blue-500 text-white font-bold"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Subcategory Selection */}
      <h2 className="text-xl font-semibold mb-2">Select Subcategory:</h2>
      <div className="flex space-x-4 mb-4">
        {subcategories.map((subcategory) => (
          <button
            key={subcategory}
            onClick={() => setSelectedSubcategory(subcategory)}
            className={`px-4 py-2 rounded transition-colors duration-200 ${
              selectedSubcategory === subcategory
                ? "bg-blue-500 text-white font-bold"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
          </button>
        ))}
      </div>

      {/* Product Listing */}
      <h2 className="text-2xl font-bold mb-4">Products:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48 mb-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;