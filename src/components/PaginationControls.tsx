'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  categoryPath: string
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
    categoryPath
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get current page and per_page from the query parameters
  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '8'  // Changed default to 8

  const totalItems = 20  // Adjust this according to your data

  return (
    <div className='flex gap-2'>
      {/* Previous Page Button */}
      <button
        className='bg-blue-500 text-white p-1'
        disabled={!hasPrevPage}
        onClick={() => {
          // Navigate to the previous page dynamically for any category
          router.push(`${categoryPath}?page=${Number(page) - 1}&per_page=${per_page}`)
        }} >
        prev page
      </button>

      <div>
        {page} / {Math.ceil(totalItems / Number(per_page))} {/* Show current page and total pages */}
      </div>

      {/* Next Page Button */}
      <button
        className='bg-blue-500 text-white p-1'
        disabled={!hasNextPage}
        onClick={() => {
          // Navigate to the next page dynamically for any category
          router.push(`${categoryPath}?page=${Number(page) + 1}&per_page=${per_page}`)
        }} >
        next page
      </button>
    </div>
  )
}

export default PaginationControls
