"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CreditCard, LockIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { createInvoiceAction } from "./create-invoice-action"

export function InvoiceForm() {
    const [amount, setAmount] = useState("")

  // Calcular valores
  const value = Number.parseFloat(amount.replace(/[^\d]/g, "")) / 100 || 0
  const fee = value * 0.02
  const total = value + fee

  // Formatar para moeda brasileira
  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Permitir apenas números e formatar como moeda
    const value = e.target.value.replace(/\D/g, "")
    if (value === "") {
      setAmount("")
      return
    }

    const formattedValue = (Number.parseInt(value) / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })

    setAmount(formattedValue)
  }

    return (
        <form action={createInvoiceAction}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="amount" className="block text-gray-300 mb-2">
                    Valor
                  </label>
                  <Input
                    id="amount"
                    value={amount}
                    name="amount"
                    type="number"
                    onChange={handleAmountChange}
                    placeholder="R$ 0,00"
                    className="bg-navy border-navy-dark text-gray-300"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-gray-300 mb-2">
                    Descrição
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Descreva o motivo do pagamento"
                    className="bg-navy border-navy-dark text-gray-300 min-h-[120px]"
                  />
                </div>
              </div>

              <div className="bg-navy rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Dados do Cartão</h2>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="cardNumber" className="block text-gray-300 mb-2">
                      Número do Cartão
                    </label>
                    <div className="relative">
                      <Input
                        id="cardNumber"
                        placeholder="0000 0000 0000 0000"
                        className="bg-navy-dark border-navy-dark text-gray-300 pl-3 pr-10"
                      />
                      <CreditCard
                        size={18}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-gray-300 mb-2">
                        Data de Expiração
                      </label>
                      <Input id="expiry" placeholder="MM/AA" className="bg-navy-dark border-navy-dark text-gray-300" />
                    </div>

                    <div>
                      <label htmlFor="cvv" className="block text-gray-300 mb-2">
                        CVV
                      </label>
                      <Input id="cvv" placeholder="123" className="bg-navy-dark border-navy-dark text-gray-300" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cardName" className="block text-gray-300 mb-2">
                      Nome no Cartão
                    </label>
                    <Input
                      id="cardName"
                      placeholder="Como aparece no cartão"
                      className="bg-navy-dark border-navy-dark text-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-navy rounded-lg p-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Subtotal</span>
                  <span className="text-white">{formatCurrency(value)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Taxa de Processamento (2%)</span>
                  <span className="text-white">{formatCurrency(fee)}</span>
                </div>
                <div className="border-t border-navy-light pt-2 mt-2 flex justify-between">
                  <span className="text-white font-bold">Total</span>
                  <span className="text-white font-bold">{formatCurrency(total)}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <Link href="/dashboard">
                <Button variant="outline" className="bg-navy">
                  Cancelar
                </Button>
              </Link>
              <Button className="bg-primary hover:bg-primary/90 gap-2">
                <LockIcon size={16} />
                Processar Pagamento
              </Button>
            </div>
        </form>
    )
}
