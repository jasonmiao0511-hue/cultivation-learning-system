import { useState, useMemo } from 'react'
import type { Task } from '../types'
import { useProgress } from '../hooks/useProgress'
import { useCustomTasks } from '../hooks/useCustomTasks'
import { useDailyTasks } from '../hooks/useDailyTasks'
import { useRecords } from '../hooks/useRecords'
import TaskItem from '../components/feature/TaskItem'
import FocusTimer from '../components/feature/FocusTimer'
import { getToday, formatDate } from '../utils/date'
import { calculateCultivation } from '../utils/realm'
import { QUOTES } from '../mocks/quotes'

export default function Daily() {
  const { progress, completeContent } = useProgress()
  const { customTasks } = useCustomTasks()
  const { updateRecord, getRecord } = useRecords()
  const tasks = useDailyTasks(progress, customTasks)
  const [expandedId, setExpandedId] = useState<string | null>(
    tasks.find((t) => !t.completed)?.id || null
  )
  const [combo, setCombo] = useState(0)

  const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)]
  const completedCount = tasks.filter((t) => t.completed).length
  const allDone = completedCount === tasks.length && tasks.length > 0

  const handleComplete = (task: Task, index: number) => {
    if (task.completed) return

    const cultivation = calculateCultivation(task.duration, combo + 1)

    if (task.subject !== 'custom' && task.contentId) {
      completeContent(task.subject, task.contentId, cultivation)
    }

    const today = getToday()
    const record = getRecord(today)
    updateRecord(today, {
      tasks: record.tasks.map((t) => (t.id === task.id ? { ...t, completed: true, completedAt: new Date().toISOString() } : t)),
      completedCount: record.completedCount + 1,
      cultivation: record.cultivation + cultivation,
    })

    setCombo((c) => c + 1)

    const next = tasks.slice(index + 1).find((t) => !t.completed)
    if (next) {
      setExpandedId(next.id)
      setTimeout(() => {
        document.getElementById(`task-${next.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 300)
    } else {
      setExpandedId(null)
    }
  }

  const grouped = useMemo(() => {
    const groups: Record<string, Task[]> = { english: [], chinese: [], math: [], custom: [] }
    tasks.forEach((t) => groups[t.subject].push(t))
    return groups
  }, [tasks])

  const subjectNames: Record<string, string> = {
    english: '英语功法',
    chinese: '语文功法',
    math: '数学功法',
    custom: '自定义历练',
  }

  if (allDone) {
    return (
      <div className="card py-12 text-center">
        <div className="text-5xl">🎉</div>
        <h2 className="mt-4 text-2xl font-bold">今日历练圆满！</h2>
        <p className="mt-2 text-slate-400">击败 {tasks.length} 只妖兽，获得 {getRecord(getToday()).cultivation} 修为</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="card mb-4">
          <h1 className="text-xl font-bold">{formatDate(getToday())} · 今日历练</h1>
          <p className="text-slate-400">「{quote}」</p>
          <div className="mt-2 text-sm">已完成 {completedCount}/{tasks.length} · 连击 {combo}</div>
        </div>

        {Object.entries(grouped).map(([subject, list]) =>
          list.length > 0 ? (
            <div key={subject} className="mb-4">
              <div className="mb-2 font-bold">{subjectNames[subject]}</div>
              {list.map((task, index) => {
                const globalIndex = tasks.findIndex((t) => t.id === task.id)
                return (
                  <div key={task.id} id={`task-${task.id}`}>
                    <TaskItem
                      task={task}
                      expanded={expandedId === task.id}
                      onToggle={() => setExpandedId(expandedId === task.id ? null : task.id)}
                      onComplete={() => handleComplete(task, globalIndex)}
                    />
                  </div>
                )
              })}
            </div>
          ) : null
        )}
      </div>

      <div>
        <FocusTimer onComplete={(min) => {
          const today = getToday()
          const record = getRecord(today)
          updateRecord(today, { totalDuration: record.totalDuration + min })
        }} />
      </div>
    </div>
  )
}
