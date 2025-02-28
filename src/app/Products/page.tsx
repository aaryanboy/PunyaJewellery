import PaginationControls from '@/components/PaginationControls'

const data = [
  'entry 1',
  'entry 2',
  'entry 3',
  'entry 4',
  'entry 5',
  'entry 6',
  'entry 7',
  'entry 8',
  'entry 9',
  'entry 10',
  'entry 11',
  'entry 12',
  'entry 13',
  'entry 14',
  'entry 15',
  'entry 16',
  'entry 17',
  'entry 18',
  'entry 19',
  'entry 20',
]

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '5'

  // Manually set the path for this specific page
  const path = '/Products' // Change this to /products/gold, /products/silver, etc.

  // Calculate pagination
  const start = (Number(page) - 1) * Number(per_page)
  const end = start + Number(per_page)
  const entries = data.slice(start, end)

  return (
    <div className='flex flex-col gap-2 items-center'>
      {entries.map((entry) => (
        <p key={entry}>{entry}</p>
      ))}

      <PaginationControls
        hasNextPage={end < data.length}
        hasPrevPage={start > 0}
        categoryPath={path} // Pass the manually defined path
      />
    </div>
  )
}
