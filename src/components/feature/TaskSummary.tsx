import type { Task } from '../../types'
import ProgressBar from '../base/ProgressBar'

interface Props {
  tasks: Task[]
}

export default function TaskSummary({ tasks }: Props) {
  const completed = tasks.filter((t) => t.completed).length
  return (
    <div className="card">
      <div className="mb-2 text-sm text-slate-400">今日任务</div>
      <ProgressBar
        value={completed}
        max={tasks.length}
        label={`${completed}/${tasks.length} 已完成`}
      />
    </div>
  )
}
