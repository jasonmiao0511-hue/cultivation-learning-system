import { useState } from 'react'
import { useProgress } from '../../hooks/useProgress'
import { CHINESE_LESSONS } from '../../mocks/chineseData'
import SubjectSidebar from '../../components/feature/SubjectSidebar'

export default function Chinese() {
  const { progress, completeContent } = useProgress()
  const [activeId, setActiveId] = useState(CHINESE_LESSONS[0]?.id || '')
  const lesson = CHINESE_LESSONS.find((l) => l.id === activeId)

  const items = CHINESE_LESSONS.map((l) => ({
    id: l.id,
    title: l.title,
    completed: progress.chinese.includes(l.id),
  }))

  return (
    <div className="grid gap-4 lg:grid-cols-4">
      <div className="lg:col-span-1">
        <SubjectSidebar items={items} activeId={activeId} onSelect={setActiveId} />
      </div>
      <div className="lg:col-span-3">
        <div className="card">
          <h1 className="text-xl font-bold">语文功法 · {lesson?.title}</h1>
          <div className="mt-4 whitespace-pre-wrap leading-relaxed">{lesson?.content}</div>
          {lesson?.appreciation && <div className="mt-4 text-sm text-slate-400">赏析：{lesson.appreciation}</div>}
          {lesson?.notes && lesson.notes.map((n, i) => <div key={i} className="mt-2 text-sm text-realm-400">💡 {n}</div>)}
          <button
            onClick={() => lesson && completeContent('chinese', lesson.id, 15)}
            className="btn-primary mt-4"
            disabled={!lesson || progress.chinese.includes(lesson.id)}
          >
            标记参悟
          </button>
        </div>
      </div>
    </div>
  )
}
