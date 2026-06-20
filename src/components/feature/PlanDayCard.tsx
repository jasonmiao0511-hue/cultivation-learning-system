import type { Task } from '../../types'
import ProgressBar from '../base/ProgressBar'

interface Props {
  day: number
  date: string
  tasks: Task[]
  onClick: () => void
}

export default function PlanDayCard({ day, date, tasks, onClick }: Props) {
  const completed = tasks.filter((t) => t.completed).length
  return (
    <div onClick={onClick} className="card cursor-pointer hover:border-realm-500">
      <div className="flex justify-between">
        <span className="font-bold">Day {day}</span>
        <span className="text-xs text-slate-400">{date}</span>
      </div>
      <div className="mt-2 text-xs text-slate-400">{tasks.length} 只妖兽</div>
      <ProgressBar value={completed} max={tasks.length} />
    </div>
  )
}
