import { DatePicker } from "@/components/date-picker"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface InvoiceFilterProps {
  onFilterChange?: (filters: {
    status: string
    startDate: string
    endDate: string
    search: string
  }) => void
}

export function InvoiceFilter({ onFilterChange }: InvoiceFilterProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div>
        <Select defaultValue="todos">
          <SelectTrigger className="bg-navy-light border-navy-light text-gray-300">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos</SelectItem>
            <SelectItem value="aprovado">Aprovado</SelectItem>
            <SelectItem value="pendente">Pendente</SelectItem>
            <SelectItem value="rejeitado">Rejeitado</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <DatePicker placeholder="dd/mm/aaaa" />
      </div>

      <div>
        <DatePicker placeholder="dd/mm/aaaa" />
      </div>

      <div>
        <Input placeholder="ID ou descrição" className="bg-navy-light border-navy-light text-gray-300" />
      </div>
    </div>
  )
}
