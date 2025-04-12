
import type React from "react"
import { Header } from "@/components/header"
import { InvoiceForm } from "./InvoiceForm"

export default function CreateInvoicePage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy">
      <Header />

      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-navy-light rounded-lg p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white">Criar Nova Fatura</h1>
              <p className="text-gray-400">Preencha os dados abaixo para processar um novo pagamento</p>
            </div>

            <InvoiceForm />
          </div>
        </div>
      </main>

      <footer className="bg-navy-dark py-4 text-center text-gray-400 text-sm">
        © 2025 Full Cycle Gateway. Todos os direitos reservados.
      </footer>
    </div>
  )
}
