import { cn } from "@/lib/utils"

type StatusType = "approved" | "pending" | "rejected"

interface StatusBadgeProps {
  status: StatusType
}

const statusConfig = {
  approved: {
    label: "Approved",
    className: "bg-green-100 text-green-800 border-green-200",
  },
  pending: {
    label: "Pending",
    className: "bg-amber-100 text-amber-800 border-amber-200",
  },
  rejected: {
    label: "Rejected",
    className: "bg-red-100 text-red-800 border-red-200",
  },
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status]

  return <span className={cn("px-3 py-1 rounded-full text-xs font-medium", config.className)}>{config.label}</span>
}
