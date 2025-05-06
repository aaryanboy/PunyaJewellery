"use client"

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { productData, Product } from '@/data/products';
import Link from 'next/link';

const ItemDetail = () => {
  const params = useParams();
  const router = useRouter();
  const itemId = params.itemId as string;

  // Find the product in our data
  let foundProduct: Product | undefined = undefined;
  let productCategory = '';
  let productSubcategory = '';
  let productimage = '';
  let productname = '';
  let productprice = 0;
  let productdescription = '';

  // Search through all categories and subcategories to find the product
  Object.keys(productData).forEach(category => {
    Object.keys(productData[category]).forEach(subcategory => {
      const product = productData[category][subcategory].find(p => p.id === itemId);
      if (product) {
        foundProduct = product;
        productCategory = category;
        productSubcategory = subcategory;
        productimage=foundProduct.image;
        productname=foundProduct.name;
        productprice=foundProduct.price;
        productdescription=foundProduct.description || `This beautiful ${productCategory} ${productSubcategory} is crafted with care and attention to detail. 
        Perfect for any occasion, this piece will add elegance to your collection.`;
      }
    });
  });
  

  // If product not found, show error
  if (!foundProduct) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
        <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <button 
        onClick={() => router.back()} 
        className="mb-6 flex items-center text-blue-500 hover:text-blue-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Products
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
        {/* Product Image */}
        <div className="md:w-1/2 relative">
          <div className="relative h-64 md:h-full w-full">
            <Image
              src={productimage}
              alt={productname}
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"

            />
           
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 p-6">
          <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
            {productCategory.charAt(0).toUpperCase() + productCategory.slice(1)} • {productSubcategory.charAt(0).toUpperCase() + productSubcategory.slice(1)}
          </div>
          <h1 className="text-3xl font-bold mt-2 mb-4">{productname}</h1>
          <p className="text-2xl font-semibold text-gray-800 mb-6">${productprice}</p>
          
          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-xl font-semibold mb-2">Product Description</h2>
            <p className="text-gray-600 mb-6">
              {productdescription }
            </p>
          </div>

          <div className="mt-6">
            <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;