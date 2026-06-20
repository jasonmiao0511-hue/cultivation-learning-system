import { useState } from 'react'
import type { Priority } from '../../types'

interface Props {
  onAdd: (task: { name: string; duration: number; priority: Priority; repeatRule: 'none' | 'daily' | 'weekly' }) => void
}

export default function CustomTaskForm({ onAdd }: Props) {
  const [name, setName] = useState('')
  const [duration, setDuration] = useState(30)
  const [priority, setPriority] = useState<Priority>('medium')
  const [repeatRule, setRepeatRule] = useState<'none' | 'daily' | 'weekly'>('daily')

  const submit = () => {
    if (!name.trim()) return
    onAdd({ name, duration, priority, repeatRule })
    setName('')
  }

  return (
    <div className="card space-y-3">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="任务名称" className="w-full rounded bg-slate-900 p-2" />
      <input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full rounded bg-slate-900 p-2" />
      <select value={priority} onChange={(e) => setPriority(e.target.value as Priority)} className="w-full rounded bg-slate-900 p-2">
        <option value="low">低</option>
        <option value="medium">中</option>
        <option value="high">高</option>
      </select>
      <select value={repeatRule} onChange={(e) => setRepeatRule(e.target.value as 'none' | 'daily' | 'weekly')} className="w-full rounded bg-slate-900 p-2">
        <option value="none">不重复</option>
        <option value="daily">每天</option>
        <option value="weekly">每周</option>
      </select>
      <button onClick={submit} className="btn-primary w-full">添加自定义历练</button>
    </div>
  )
}
