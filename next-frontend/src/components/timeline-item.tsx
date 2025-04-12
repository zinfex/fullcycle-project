import { CheckCircle } from "lucide-react"

interface TimelineItemProps {
  title: string
  date: string
  time: string
}

export function TimelineItem({ title, date, time }: TimelineItemProps) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div className="mt-1">
        <CheckCircle className="h-5 w-5 text-green-500" />
      </div>
      <div>
        <h4 className="text-white font-medium">{title}</h4>
        <p className="text-gray-400 text-sm">
          {date} {time}
        </p>
      </div>
    </div>
  )
}
