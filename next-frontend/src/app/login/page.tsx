import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AuthForm from "./AuthForm"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-navy-light border-navy">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Autenticação Gateway</CardTitle>
            <p className="text-gray-400 mt-2">Insira sua API Key para acessar o sistema</p>
          </CardHeader>
          <CardContent>
            <AuthForm />
          </CardContent>
        </Card>
      </main>
    </div>
    )
}
