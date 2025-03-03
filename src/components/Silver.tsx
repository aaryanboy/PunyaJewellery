import PaginationControls from '@/components/PaginationControls'
import { jewelryData } from '@/data/jewelryData'

export default function Silver({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  // Ensure searchParams exists and parse values safely
  const page = Number(searchParams?.page) || 1;
  const perPage = Number(searchParams?.per_page) || 8;

  // Manually define the path (change it for different pages)
  const path = '/Products/Silver'; // Change to '/products/Silver' for silver page

  // Get the relevant jewelry data based on the category
  const data = jewelryData.silver || [];

  // Calculate pagination
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const entries = data.slice(start, end);

  return (
    <div className="flex flex-col gap-4 items-center">
      {/* Jewelry Items Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-xl mx-5">
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
        categoryPath={path} // Pass the manually defined path
      />
    </div>
  );
}
