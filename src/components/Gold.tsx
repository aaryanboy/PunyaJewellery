"use client"
import PaginationControls from '@/components/PaginationControls'
import { jewelryData } from '@/data/jewelryData'
import { use } from 'react';

export default function Gold({
  searchParams = {},
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  // Ensure searchParams are properly handled
  const page = Number(searchParams?.page) || 1;
  const perPage = Number(searchParams?.per_page) || 8;

  // Define the category path
  const path = '/Products/Gold'; // Change to '/products/gold' for gold page

  // Get the relevant jewelry data
  const data = jewelryData.gold || [];

  // Calculate pagination
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const entries = data.slice(start, end);

  return (
    <div className="flex flex-col gap-4 items-center">
      {/* Jewelry Items Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-xl">
        {entries.map((item) => (
          <div
            key={item.id}
            className="product-item p-4 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
            <div className="flex justify-between items-center text-gray-700">
              <p className="font-bold text-lg">Price: ${item.price}</p>
              <p className="font-medium">{item.gram}g</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <PaginationControls
        hasNextPage={end < data.length}
        hasPrevPage={start > 0}
        categoryPath={path}
      />
    </div>
  );
}


