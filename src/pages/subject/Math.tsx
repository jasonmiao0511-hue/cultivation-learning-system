import { useState } from 'react'
import { useAppState } from '../../context/AppStateContext'
import { MATH_TOPICS } from '../../mocks/mathData'
import SubjectSidebar from '../../components/feature/SubjectSidebar'

export default function Math() {
  const { progress, completeContent } = useAppState()
  const [activeId, setActiveId] = useState(MATH_TOPICS[0]?.id || '')
  const topic = MATH_TOPICS.find((t) => t.id === activeId)

  const items = MATH_TOPICS.map((t) => ({
    id: t.id,
    title: t.title,
    completed: progress.math.includes(t.id),
  }))

  return (
    <div className="grid gap-4 lg:grid-cols-4">
      <div className="lg:col-span-1">
        <SubjectSidebar items={items} activeId={activeId} onSelect={setActiveId} />
      </div>
      <div className="lg:col-span-3 space-y-4">
        <div className="card">
          <h1 className="text-xl font-bold">数学功法 · {topic?.title}</h1>
          <div className="mt-2 text-sm text-slate-400">{topic?.chapter}</div>
          <div className="mt-4">{topic?.explanation}</div>
          <div className="card mt-4 bg-amber-900/30">
            <div className="font-bold">例题</div>
            <div className="mt-2">{topic?.example}</div>
          </div>
          <button
            onClick={() => topic && completeContent('math', topic.id, 15)}
            className="btn-primary mt-4"
            disabled={!topic || progress.math.includes(topic.id)}
          >
            标记掌握
          </button>
        </div>
      </div>
    </div>
  )
}
