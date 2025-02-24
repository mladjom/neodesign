import Link from "next/link"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  currentPage: number
  totalPages: number
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex justify-center items-center space-x-4 mt-12">
      {currentPage > 1 && (
        <Button variant="outline" asChild>
          <Link href={`/blog?page=${currentPage - 1}`}>Previous</Link>
        </Button>
      )}
      <span className="text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && (
        <Button variant="outline" asChild>
          <Link href={`/blog?page=${currentPage + 1}`}>Next</Link>
        </Button>
      )}
    </div>
  )
}