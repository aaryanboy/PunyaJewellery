"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  categoryPath: string;
}

export default function PaginationControls({
  hasNextPage,
  hasPrevPage,
  categoryPath,
}: PaginationControlsProps) {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const perPage = Number(searchParams.get("per_page")) || 8;

  const prevPageUrl = `${categoryPath}?page=${page - 1}&per_page=${perPage}`;
  const nextPageUrl = `${categoryPath}?page=${page + 1}&per_page=${perPage}`;

  return (
    <div className="flex gap-4 mt-6">
      <Link
        href={prevPageUrl}
        className={`px-4 py-2 rounded-md ${
          hasPrevPage
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Previous
      </Link>
      <Link
        href={nextPageUrl}
        className={`px-4 py-2 rounded-md ${
          hasNextPage
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Next
      </Link>
    </div>
  );
}