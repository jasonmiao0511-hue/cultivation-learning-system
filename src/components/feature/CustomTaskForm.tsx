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
      <label className="block text-sm text-slate-400" htmlFor="custom-task-name">任务名称</label>
      <input id="custom-task-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="例如：跳绳1000个" className="w-full rounded border border-slate-700 bg-slate-900 p-2 text-slate-100" />
      <label className="block text-sm text-slate-400" htmlFor="custom-task-duration">时长（分钟）</label>
      <input id="custom-task-duration" type="number" min={1} max={240} value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full rounded border border-slate-700 bg-slate-900 p-2 text-slate-100" />
      <label className="block text-sm text-slate-400" htmlFor="custom-task-priority">优先级</label>
      <select id="custom-task-priority" value={priority} onChange={(e) => setPriority(e.target.value as Priority)} className="w-full rounded border border-slate-700 bg-slate-900 p-2 text-slate-100">
        <option value="low">低</option>
        <option value="medium">中</option>
        <option value="high">高</option>
      </select>
      <label className="block text-sm text-slate-400" htmlFor="custom-task-repeat">重复规则</label>
      <select id="custom-task-repeat" value={repeatRule} onChange={(e) => setRepeatRule(e.target.value as 'none' | 'daily' | 'weekly')} className="w-full rounded border border-slate-700 bg-slate-900 p-2 text-slate-100">
        <option value="none">不重复</option>
        <option value="daily">每天</option>
        <option value="weekly">每周（按创建日）</option>
      </select>
      <button onClick={submit} className="btn-primary w-full">添加自定义任务</button>
    </div>
  )
}
