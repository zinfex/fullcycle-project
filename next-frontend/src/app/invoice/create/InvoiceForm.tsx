"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CreditCard, LockIcon } from "lucide-react";
import Link from "next/link";
import { createInvoiceAction } from "./create-invoice-action";
import { useState } from "react";

export function InvoiceForm() {
  const [amount, setAmount] = useState<number>(0);

  function formatCurrency(value: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
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
              name="amount"
              type="number"
              step={0.01}
              min={0}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
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
              name="description"
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
                  name="cardNumber"
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
                <Input
                  id="expiry"
                  name="expiry"
                  placeholder="MM/AA"
                  className="bg-navy-dark border-navy-dark text-gray-300"
                />
              </div>

              <div>
                <label htmlFor="cvv" className="block text-gray-300 mb-2">
                  CVV
                </label>
                <Input
                  id="cvv"
                  name="cvv"
                  placeholder="123"
                  className="bg-navy-dark border-navy-dark text-gray-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="cardName" className="block text-gray-300 mb-2">
                Nome no Cartão
              </label>
              <Input
                id="cardName"
                name="cardName"
                maxLength={16}
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
            <span className="text-white font-medium">
              {formatCurrency(amount)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Taxa (2%)</span>
            <span className="text-white font-medium">
              {formatCurrency(amount * 0.02)}
            </span>
          </div>
          <div className="flex justify-between pt-2 border-t border-navy-dark">
            <span className="text-white font-medium">Total</span>
            <span className="text-white font-medium">
              {formatCurrency(amount * 1.02)}
            </span>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Processar Pagamento
          </Button>
        </div>
      </div>
    </form>
  );
}
