import { useState, useMemo } from 'react'
import type { Task } from '../types'
import { useAppState } from '../context/AppStateContext'
import TaskItem from '../components/feature/TaskItem'
import FocusTimer from '../components/feature/FocusTimer'
import DefeatAnimation from '../components/feature/DefeatAnimation'
import RealmUpAnimation from '../components/feature/RealmUpAnimation'
import { getToday, formatDate } from '../utils/date'
import { calculateCultivation } from '../utils/realm'
import { QUOTES } from '../mocks/quotes'

const subjectNames: Record<string, string> = {
  english: '英语课程',
  chinese: '语文课程',
  math: '数学课程',
  history: '历史课程',
  custom: '自定义任务',
}

export default function Daily() {
  const { progress, completeContent, newRealm, acknowledgeRealmChange, customTasks, updateRecord, getRecord, tasks } = useAppState()
  const [expandedId, setExpandedId] = useState<string | null>(() => tasks.find((t) => !t.completed)?.id || null)
  const [combo, setCombo] = useState(0)
  const [showDefeat, setShowDefeat] = useState(false)

  const quote = useMemo(() => QUOTES[Math.floor(Math.random() * QUOTES.length)], [])
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
      completedCount: record.completedCount + 1,
      cultivation: record.cultivation + cultivation,
    })

    setCombo((c) => c + 1)
    setShowDefeat(true)

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
    const groups: Record<string, Task[]> = { english: [], chinese: [], math: [], history: [], custom: [] }
    tasks.forEach((t) => groups[t.subject].push(t))
    return groups
  }, [tasks])

  const taskIndexMap = useMemo(() => {
    const map = new Map<string, number>()
    tasks.forEach((t, i) => map.set(t.id, i))
    return map
  }, [tasks])

  if (allDone) {
    return (
      <div className="card py-12 text-center">
        <div className="text-5xl">🎉</div>
        <h2 className="mt-4 text-2xl font-bold">今日学习圆满！</h2>
        <p className="mt-2 text-slate-400">完成 {tasks.length} 个任务，获得 {getRecord(getToday()).cultivation} 学分</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="card mb-4">
          <h1 className="text-xl font-bold">{formatDate(getToday())} · 今日学习</h1>
          <p className="text-slate-400">「{quote}」</p>
          <div className="mt-2 text-sm">已完成 {completedCount}/{tasks.length} · 下一题连续 ×{combo + 1}</div>
        </div>

        {Object.entries(grouped).map(([subject, list]) =>
          list.length > 0 ? (
            <div key={subject} className="mb-4">
              <div className="mb-2 font-bold">{subjectNames[subject]}</div>
              {list.map((task, index) => (
                <div key={task.id} id={`task-${task.id}`}>
                  <TaskItem
                    task={task}
                    expanded={expandedId === task.id}
                    onToggle={() => setExpandedId(expandedId === task.id ? null : task.id)}
                    onComplete={() => handleComplete(task, taskIndexMap.get(task.id) ?? 0)}
                  />
                </div>
              ))}
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

      <DefeatAnimation show={showDefeat} onDone={() => setShowDefeat(false)} />
      {newRealm && <RealmUpAnimation realm={newRealm} onDone={acknowledgeRealmChange} />}
    </div>
  )
}
