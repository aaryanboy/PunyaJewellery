// src/components/ProductCard.tsx
"use client";

import React from "react";
import { Product } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  product,
  category,
}: {
  product: Product;
  category: "gold" | "silver";
}) {
  return (
    <Link href={`/products/${category}/${product.id}`}>
      <div className="bg-white rounded shadow hover:shadow-lg transition p-4 cursor-pointer">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="rounded mb-3"
        />
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">Rs {product.price}</p>
      </div>
    </Link>
  );
}
