"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { InvoiceFilter } from "@/components/invoice-filter"
import { InvoiceTable, type Invoice } from "@/components/invoice-table"
import { Pagination } from "@/components/pagination"
import { Plus } from "lucide-react"
import Link from "next/link"

// Dados de exemplo
const mockInvoices: Invoice[] = [
  {
    id: "#INV-001",
    date: "30/03/2025",
    description: "Compra Online #123",
    value: "R$ 1.500,00",
    status: "approved",
  },
  {
    id: "#INV-002",
    date: "29/03/2025",
    description: "Serviço Premium",
    value: "R$ 15.000,00",
    status: "pending",
  },
  {
    id: "#INV-003",
    date: "28/03/2025",
    description: "Assinatura Mensal",
    value: "R$ 99,90",
    status: "rejected",
  },
]

export default function DashboardPage() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="min-h-screen flex flex-col bg-navy">
      <Header />

      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-navy-light rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="text-2xl font-bold text-white">Faturas</h1>
                <p className="text-gray-400">Gerencie suas faturas e acompanhe os pagamentos</p>
              </div>
              <Link href="/invoice/create">
                <Button className="bg-primary hover:bg-primary/90">
                  <Plus size={16} className="mr-2" />
                  Nova Fatura
                </Button>
              </Link>
            </div>

            <InvoiceFilter />

            <InvoiceTable invoices={mockInvoices} />

            <Pagination currentPage={currentPage} totalPages={3} onPageChange={setCurrentPage} />
          </div>
        </div>
      </main>
    </div>
  )
}
