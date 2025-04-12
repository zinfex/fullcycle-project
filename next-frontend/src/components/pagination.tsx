"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="text-sm text-gray-400">
        Mostrando {currentPage === 1 ? 1 : (currentPage - 1) * 10 + 1} - {Math.min(currentPage * 10, 50)} de 50
        resultados
      </div>
      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 bg-navy-light"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={16} />
        </Button>

        {pages.map((page) => (
          <Button
            key={page}
            variant="outline"
            size="icon"
            className={cn(
              "h-8 w-8",
              currentPage === page ? "bg-primary text-white hover:bg-primary hover:text-white" : "bg-navy-light",
            )}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        ))}

        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 bg-navy-light"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  )
}
