import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  "use server";
  const apiKey = formData.get("apiKey");

  const response = await fetch("http://localhost:8080/accounts", {
    headers: {
      "X-API-KEY": apiKey as string,
    },
  });

  if (response.ok) {
    const cookieStore = await cookies();
    cookieStore.set("apiKey", apiKey as string);
    redirect("/invoice");
  } else {
    throw new Error("API Key inválida");
  }
}

export default function AuthForm() {
  return (
    <form action={loginAction} className="space-y-4">
      <div className="space-y-2">
        <Input
          name="apiKey"
          type="text"
          placeholder="Digite sua API Key"
          className="bg-navy border-navy text-white"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
      >
        Entrar
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
