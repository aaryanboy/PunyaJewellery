"use client"

import React from 'react';
import { productData } from "@/data/products";

interface CategorySelectProps {
  selectedCategory: "gold" | "silver";
  setSelectedCategory: (category: "gold" | "silver") => void;
  selectedSubcategory: string;
  setSelectedSubcategory: (subcategory: string) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedSubcategory,
  setSelectedSubcategory
}) => {
  const categories = ["gold", "silver"] as const;
  const subcategories = Object.keys(productData[selectedCategory]);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      {/* Category Selection */}
      <div className="lg:block">
        <h2 className="text-xl font-semibold mb-2 lg:mb-4">Categories</h2>
        
        {/* Mobile Layout - Horizontal Row */}
        <div className="flex lg:hidden space-x-2 overflow-x-auto pb-2 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedSubcategory(Object.keys(productData[category])[0]);
              }}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-blue-500 text-white font-bold"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Desktop Layout - Vertical List */}
        <div className="hidden lg:flex lg:flex-col space-y-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedSubcategory(Object.keys(productData[category])[0]);
              }}
              className={`px-4 py-3 rounded transition-colors duration-200 text-left ${
                selectedCategory === category
                  ? "bg-blue-500 text-white font-bold"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Subcategory Selection */}
      <div>
        <h2 className="text-xl font-semibold mb-2 lg:mb-4">Subcategories</h2>
        
        {/* Mobile Layout - Horizontal Row */}
        <div className="flex lg:hidden space-x-2 overflow-x-auto pb-2">
          {subcategories.map((subcategory) => (
            <button
              key={subcategory}
              onClick={() => setSelectedSubcategory(subcategory)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-200 ${
                selectedSubcategory === subcategory
                  ? "bg-blue-500 text-white font-bold"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Desktop Layout - Vertical List */}
        <div className="hidden lg:flex lg:flex-col space-y-2">
          {subcategories.map((subcategory) => (
            <button
              key={subcategory}
              onClick={() => setSelectedSubcategory(subcategory)}
              className={`px-4 py-3 rounded transition-colors duration-200 text-left ${
                selectedSubcategory === subcategory
                  ? "bg-blue-500 text-white font-bold"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySelect;