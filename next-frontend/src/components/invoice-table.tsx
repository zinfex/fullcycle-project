import { Eye, Download } from "lucide-react"
import { StatusBadge } from "@/components/status-badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export type Invoice = {
  id: string
  date: string
  description: string
  value: string
  status: "approved" | "pending" | "rejected"
}

interface InvoiceTableProps {
  invoices: Invoice[]
}

export function InvoiceTable({ invoices }: InvoiceTableProps) {
  return (
    <div className="w-full overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-navy-light">
            <th className="text-left py-3 px-4 text-gray-400 font-medium">ID</th>
            <th className="text-left py-3 px-4 text-gray-400 font-medium">DATA</th>
            <th className="text-left py-3 px-4 text-gray-400 font-medium">DESCRIÇÃO</th>
            <th className="text-left py-3 px-4 text-gray-400 font-medium">VALOR</th>
            <th className="text-left py-3 px-4 text-gray-400 font-medium">STATUS</th>
            <th className="text-left py-3 px-4 text-gray-400 font-medium">AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="border-b border-navy-light">
              <td className="py-4 px-4 text-gray-300">{invoice.id}</td>
              <td className="py-4 px-4 text-gray-300">{invoice.date}</td>
              <td className="py-4 px-4 text-gray-300">{invoice.description}</td>
              <td className="py-4 px-4 text-gray-300">{invoice.value}</td>
              <td className="py-4 px-4">
                <StatusBadge status={invoice.status} />
              </td>
              <td className="py-4 px-4 flex gap-2">
                <Link href={`/invoice/${invoice.id}`}>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye size={18} className="text-gray-400" />
                  </Button>
                </Link>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Download size={18} className="text-gray-400" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
