// "use client"

// import { useState } from "react"
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { InvoiceFilter } from "@/components/invoice-filter";
// import { Pagination } from "@/components/pagination";
import { Plus } from "lucide-react";
import Link from "next/link";
import InvoiceData from "./invoice-data";

export default function InvoicePage() {
  // const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="min-h-screen flex flex-col bg-navy">
      <Header />

      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-navy-light rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="text-2xl font-bold text-white">Faturas</h1>
                <p className="text-gray-400">
                  Gerencie suas faturas e acompanhe os pagamentos
                </p>
              </div>
              <Link href="/invoice/create">
                <Button className="bg-primary hover:bg-primary/90">
                  <Plus size={16} className="mr-2" />
                  Nova Fatura
                </Button>
              </Link>
            </div>

            <InvoiceFilter />
            <InvoiceData />

            {/* <Pagination currentPage={currentPage} totalPages={3} onPageChange={setCurrentPage} /> */}
          </div>
        </div>
      </main>

      <footer className="bg-navy-dark py-4 text-center text-gray-400 text-sm">
        © 2025 Full Cycle Gateway. Todos os direitos reservados.
      </footer>
    </div>
  );
}
