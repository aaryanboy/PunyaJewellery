// app/products/[category]/[itemid]/page.tsx
"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { productData, Product } from "@/data/products";
import Image from "next/image";

export default function ProductDetailPage() {
  const { category, itemid } = useParams<{ category: string; itemid: string }>();

  if (category !== "gold" && category !== "silver") {
    return <div className="p-6 text-red-500 text-center">Invalid category.</div>;
  }

  // 🏷️ find product by searching every subcategory
  let product: Product | undefined;
  for (const list of Object.values(productData[category])) {
    product = list.find((p) => p.id === itemid);
    if (product) break;
  }

  if (!product) {
    return <div className="p-6 text-red-500 text-center">Product not found.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <Link href={`/products/${category}`} className="text-blue-600 hover:underline">
        ← Back to {category} products
      </Link>

      <div className="mt-6 grid lg:grid-cols-2 gap-8">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="rounded shadow"
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-2">Rs {product.price}</p>
          {product.description && (
            <p className="mb-4 leading-relaxed">{product.description}</p>
          )}
          {/* add “Add to Cart” etc. here */}
        </div>
      </div>
    </div>
  );
}
