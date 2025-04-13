"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createInvoiceAction(formData: FormData) {
  const cookiesStore = await cookies();
  const apiKey = cookiesStore.get("apiKey");

  if (!apiKey?.value) {
    throw new Error("API Key não encontrada");
  }

  const amount = formData.get("amount");
  const description = formData.get("description");
  const cardNumber = formData.get("cardNumber");
  const expiry = formData.get("expiry");
  const cvv = formData.get("cvv");
  const cardName = formData.get("cardName");

  if (!amount || !description || !cardNumber || !expiry || !cvv || !cardName) {
    throw new Error("Todos os campos são obrigatórios");
  }

  const [expiry_month, expiry_year] = expiry.toString().split("/");

  const response = await fetch("http://localhost:8080/invoice", {
    method: "POST",
    body: JSON.stringify({
      amount: parseFloat(amount as string),
      description,
      card_number: cardNumber,
      expiry_month: parseInt(expiry_month),
      expiry_year: parseInt(expiry_year),
      cvv,
      cardholder_name: cardName,
      payment_type: "credit_card",
    }),
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiKey.value,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Falha ao criar fatura");
  }

  const data = await response.json();

  revalidateTag(`accounts/${apiKey.value}/invoices`);
  revalidateTag(`accounts/${apiKey.value}/invoices/${data.id}`);
  
  return redirect("/invoice");
}
