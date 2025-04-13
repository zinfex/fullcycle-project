"use client";

import { Eye, Download } from "lucide-react";
import { StatusBadge } from "@/components/status-badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Invoice {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: "approved" | "pending" | "rejected";
}

interface InvoiceTableProps {
  invoices: Invoice[];
}

export default function InvoiceTable({ invoices }: InvoiceTableProps) {
  if (!invoices || invoices.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        Nenhuma fatura encontrada
      </div>
    );
  }

  return (
    <div className="w-full overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-navy-light">
            <th className="text-left py-3 px-4 text-gray-400 font-medium">
              ID
            </th>
            <th className="text-left py-3 px-4 text-gray-400 font-medium">
              DATA
            </th>
            <th className="text-left py-3 px-4 text-gray-400 font-medium">
              DESCRIÇÃO
            </th>
            <th className="text-left py-3 px-4 text-gray-400 font-medium">
              VALOR
            </th>
            <th className="text-left py-3 px-4 text-gray-400 font-medium">
              STATUS
            </th>
            <th className="text-left py-3 px-4 text-gray-400 font-medium">
              AÇÕES
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="border-b border-navy-light">
              <td className="py-4 px-4 text-gray-300">{invoice.id}</td>
              <td className="py-4 px-4 text-gray-300">
                {new Date(invoice.date).toLocaleDateString("pt-BR")}
              </td>
              <td className="py-4 px-4 text-gray-300">{invoice.description}</td>
              <td className="py-4 px-4 text-gray-300">
                {invoice.amount.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
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
  );
}
