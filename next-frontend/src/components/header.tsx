import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";



export function Header() {
  return (
    <header className="w-full bg-navy-dark py-4 px-6 flex justify-between items-center border-b border-navy-light">
      <Link href="/invoice" className="text-xl font-bold text-white">
        Full Cycle Gateway
      </Link>
      <div className="flex items-center gap-4">
        <span className="text-gray-300">Olá, usuário</span>
        <Button
          variant="destructive"
          size="sm"
          className="flex items-center gap-1"
        >
          <LogOut size={16} />
          Logout
        </Button>
      </div>
    </header>
  );
}
