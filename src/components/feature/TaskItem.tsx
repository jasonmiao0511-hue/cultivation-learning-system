import { useState } from 'react'
import type { Task } from '../../types'

interface Props {
  task: Task
  expanded: boolean
  onToggle: () => void
  onComplete: () => void
}

export default function TaskItem({ task, expanded, onToggle, onComplete }: Props) {
  const [showDone, setShowDone] = useState(false)

  return (
    <div className={`card mb-3 border-l-4 ${task.completed ? 'border-emerald-500 opacity-70' : 'border-realm-500'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onComplete}
            className={`h-6 w-6 rounded-full border-2 ${task.completed ? 'bg-emerald-500 border-emerald-500' : 'border-slate-400'}`}
          />
          <span className={`font-medium ${task.completed ? 'line-through text-slate-500' : ''}`}>{task.title}</span>
        </div>
        <button onClick={onToggle} className="text-sm text-realm-400">{expanded ? '收起' : '展开'}</button>
      </div>
      {expanded && (
        <div className="mt-4">
          <div className="text-sm text-slate-400">预计时长：{task.duration} 分钟 · 优先级：{task.priority}</div>
          {!task.completed && !showDone && (
            <button onClick={() => setShowDone(true)} className="btn-primary mt-3">标记完成，继续下一个</button>
          )}
          {!task.completed && showDone && (
            <div className="mt-3 flex gap-2">
              <button onClick={onComplete} className="btn-primary">确认击败</button>
              <button onClick={() => setShowDone(false)} className="rounded-lg bg-slate-700 px-3 py-2">取消</button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
