"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product as ProductType, productData } from "@/data/products";

interface ProductListingProps {
  selectedCategory: "gold" | "silver";
  selectedSubcategory: string;
}

const ProductListing: React.FC<ProductListingProps> = ({
  selectedCategory,
  selectedSubcategory
}) => {
  const products = productData[selectedCategory][selectedSubcategory] || [];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} {selectedSubcategory.charAt(0).toUpperCase() + selectedSubcategory.slice(1)}</h2>
      
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: ProductType) => (
            <Link 
              href={`/products/${product.id}`} 
              key={product.id}
              className="block border rounded-lg shadow hover:shadow-lg transition-all duration-300 bg-white transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="p-4">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 font-medium">Price: ${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-8">No products available in this category.</p>
      )}
    </div>
  );
};

export default ProductListing;