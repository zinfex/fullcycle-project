import { cookies } from "next/headers";

export async function getInvoices() {
  const cookieStore = await cookies();
  const apiKey = cookieStore.get("apiKey")?.value;

  if (!apiKey) {
    throw new Error("API key não encontrada");
  }

  const response = await fetch("http://localhost:8080/invoice", {
    headers: {
      "X-API-Key": apiKey,
    },
    cache: "force-cache",
    next: {
      tags: ["accounts/${apiKey}/invoices/${id}"],
    },
  });

  if (!response.ok) {
    throw new Error("Falha ao buscar faturas");
  }

  return response.json();
}
