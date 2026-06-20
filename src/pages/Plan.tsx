import { useState, useMemo } from 'react'
import { useAppState } from '../context/AppStateContext'
import { generateDailyPlan, START_DATE, TOTAL_DAYS } from '../services/schedule'
import PlanDayCard from '../components/feature/PlanDayCard'
import ProgressBar from '../components/base/ProgressBar'
import { addDays } from '../utils/date'

const subjects = [
  { key: 'all', label: '全部' },
  { key: 'english', label: '英语' },
  { key: 'chinese', label: '语文' },
  { key: 'math', label: '数学' },
]

export default function Plan() {
  const { progress, customTasks } = useAppState()
  const [filter, setFilter] = useState('all')

  const plan = useMemo(() => {
    return Array.from({ length: TOTAL_DAYS }, (_, i) => {
      const date = addDays(START_DATE, i)
      const tasks = generateDailyPlan(date, progress, customTasks)
      return { day: i + 1, date, tasks }
    })
  }, [progress, customTasks])

  const totalTasks = plan.reduce((sum, d) => sum + d.tasks.length, 0)
  const completedTasks = plan.reduce((sum, d) => sum + d.tasks.filter((t) => t.completed).length, 0)

  const filteredPlan = plan.map((d) => ({
    ...d,
    tasks: filter === 'all' ? d.tasks : d.tasks.filter((t) => t.subject === filter),
  }))

  return (
    <div className="space-y-4">
      <div className="card">
        <h1 className="text-xl font-bold">功法总纲 · {TOTAL_DAYS} 天渡劫计划</h1>
        <ProgressBar value={completedTasks} max={totalTasks} label={`总进度 ${completedTasks}/${totalTasks}`} />
      </div>

      <div className="flex gap-2">
        {subjects.map((s) => (
          <button
            key={s.key}
            onClick={() => setFilter(s.key)}
            className={`rounded-lg px-3 py-1 text-sm ${filter === s.key ? 'bg-realm-600 text-white' : 'bg-slate-800 text-slate-300'}`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {filteredPlan.map((d) => (
          <PlanDayCard
            key={d.date}
            day={d.day}
            date={d.date}
            tasks={d.tasks}
          />
        ))}
      </div>
    </div>
  )
}
