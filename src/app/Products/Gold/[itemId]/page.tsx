import { jewelryData } from "@/data/jewelryData";
import Image from "next/image";
import { notFound } from "next/navigation";

// Define JewelryItem type (move to types/jewelry.ts if preferred)
interface JewelryItem {
  id: string;
  name: string;
  img: string;
  price: number;
  gram: number;
  description: string;
}

// Define props for the page
interface ItemDetailProps {
  params: {
    itemId: string;
  };
}

export default function ItemDetail({ params }: ItemDetailProps) {
  const { itemId } = params;
  const item: JewelryItem | undefined = jewelryData.gold.find(
    (item: JewelryItem) => item.id === itemId
  );

  // Trigger 404 if item not found
  if (!item) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center p-6 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="relative w-full md:w-1/2 h-96">
          <Image
            src={item.img}
            alt={item.name}
            fill
            className="rounded-md object-cover"
            priority={true}
          />
        </div>
        {/* Details */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800">{item.name}</h1>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-2xl font-semibold text-gray-700">Price: ${item.price}</p>
          <p className="text-lg font-medium text-gray-700">Weight: {item.gram}g</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: ItemDetailProps) {
  const item: JewelryItem | undefined = jewelryData.gold.find(
    (item: JewelryItem) => item.id === params.itemId
  );
  return {
    title: item ? `${item.name} - Gold Jewelry` : "Item Not Found",
    description: item ? item.description : "Gold jewelry item details",
  };
}