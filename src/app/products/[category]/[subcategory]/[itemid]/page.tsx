"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { productData, Product, Category, Subcategory } from "@/data/products";

export default function ProductDetailPage() {
  const params = useParams();

  const category = params.category as Category;
  const subcategory = params.subcategory as Subcategory;
  const itemid = params.itemid as string;

  if (!productData[category] || !productData[category][subcategory]) {
    return <div className="p-6 text-red-500">Invalid category or subcategory</div>;
  }

  const product = productData[category][subcategory].find((p: Product) => p.id === itemid);

  if (!product) {
    return <div className="p-6 text-red-500">Product not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <Link href={`/products/${category}/${subcategory}`} className="text-blue-600 hover:underline">
        ← Back to {subcategory} in {category}
      </Link>

      <div className="mt-6 grid lg:grid-cols-2 gap-8">
        <Image src={product.image} alt={product.name} width={600} height={600} className="rounded shadow" />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-2">Rs {product.price}</p>
          {product.description && <p className="mb-4 leading-relaxed">{product.description}</p>}
        </div>
      </div>
    </div>
  );
}
