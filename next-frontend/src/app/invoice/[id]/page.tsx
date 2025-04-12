import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/status-badge"
import { InfoItem } from "@/components/info-item"
import { TimelineItem } from "@/components/timeline-item"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

interface InvoiceDetailsPage {
  params: {
    id: string
  }
}

export default function InvoiceDetailsPage({ params }: InvoiceDetailsPage) {
  // Normalmente, você buscaria os dados da fatura com base no ID
  const invoiceId = params.id

  return (
    <div className="min-h-screen flex flex-col bg-navy">
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-navy-light rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <Link href="/invoice">
                  <Button variant="ghost" size="sm" className="text-gray-400">
                    <ArrowLeft size={18} className="mr-1" />
                    Voltar
                  </Button>
                </Link>
                <h1 className="text-2xl font-bold text-white">Fatura #{invoiceId}</h1>
                <StatusBadge status="approved" />
              </div>
              <Button variant="outline" className="gap-2">
                <Download size={16} />
                Download PDF
              </Button>
            </div>

            <p className="text-gray-400 mb-6">Criada em 30/03/2025 às 14:30</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-navy rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Informações da Fatura</h2>
                <InfoItem label="ID da Fatura" value="#INV-001" />
                <InfoItem label="Valor" value="R$ 1.500,00" />
                <InfoItem label="Data de Criação" value="30/03/2025 14:30" />
                <InfoItem label="Última Atualização" value="30/03/2025 14:35" />
                <InfoItem label="Descrição" value="Compra Online #123" />
              </div>

              <div className="bg-navy rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Status da Transação</h2>
                <TimelineItem title="Fatura Criada" date="30/03/2025" time="14:30" />
                <TimelineItem title="Pagamento Processado" date="30/03/2025" time="14:32" />
                <TimelineItem title="Transação Aprovada" date="30/03/2025" time="14:35" />
              </div>

              <div className="bg-navy rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Método de Pagamento</h2>
                <InfoItem label="Tipo" value="Cartão de Crédito" />
                <InfoItem label="Últimos Dígitos" value="**** **** **** 1234" />
                <InfoItem label="Titular" value="João da Silva" />
              </div>

              <div className="bg-navy rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Dados Adicionais</h2>
                <InfoItem label="ID da Conta" value="ACC-12345" />
                <InfoItem label="IP do Cliente" value="192.168.1.1" />
                <InfoItem label="Dispositivo" value="Desktop - Chrome" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
