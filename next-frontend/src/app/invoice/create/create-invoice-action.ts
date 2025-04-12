import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function createInvoiceAction(formData: FormData) {
    "use server"
    const cookiesStore = await cookies()
    const apiKey = cookiesStore.get("token")
    const amount = formData.get("amount")
    const description = formData.get("description")
    const cardNumber = formData.get("cardNumber")
    const [expiry_month, expiry_year] = formData.get("expiryDate")!.toString().split("/")
    const cvv = formData.get("cvv")
    const cardholderName = formData.get("cardholderName")

    const response = await fetch("http://localhost:8080/invoice", {
        method: "POST",
        body: JSON.stringify({ 
            amount: parseFloat(amount as string), 
            description, 
            cardNumber, 
            expiry_month: parseInt(expiry_month as string),
            expiry_year: parseInt(expiry_year as string),
            cvv,
            cardholder_name: cardholderName,
            payment_type: 'credit_card'
        }),
        headers: {
            "Content-Type": "application/json",
            "X-API-Key": apiKey?.value as string,
        }
    })

    if(!response.ok) {
        throw new Error("Failed to create invoice")
    }

    return redirect("/dashboard")
}