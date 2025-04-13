import { getInvoices } from "./get-invoices";
import InvoiceTable from "./invoice-table";

export default async function InvoiceData() {
  try {
    const invoices = await getInvoices();
    return <InvoiceTable invoices={invoices || []} />;
  } catch (error) {
    console.error("Erro ao buscar faturas:", error);
    return (
      <div className="text-center py-8 text-red-400">
        Erro ao carregar faturas. Por favor, tente novamente mais tarde.
      </div>
    );
  }
}
