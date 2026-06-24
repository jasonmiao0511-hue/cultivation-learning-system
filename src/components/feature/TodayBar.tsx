interface Props {
  completedTasks: number
  totalTasks: number
  streak: number
  level: string
}

export default function TodayBar({ completedTasks, totalTasks, streak, level }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="card">
        <div className="text-sm text-slate-400">今日任务</div>
        <div className="text-2xl font-bold">{completedTasks} / {totalTasks}</div>
      </div>
      <div className="card">
        <div className="text-sm text-slate-400">连续打卡</div>
        <div className="text-2xl font-bold">{streak} 天</div>
      </div>
      <div className="card">
        <div className="text-sm text-slate-400">当前等级</div>
        <div className="text-2xl font-bold">{level}</div>
      </div>
    </div>
  )
}
