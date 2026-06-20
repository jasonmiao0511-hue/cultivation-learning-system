import { useState } from 'react'
import { useAppState } from '../../context/AppStateContext'
import { ENGLISH_WORDS } from '../../mocks/englishData'
import VocabCard from '../../components/feature/VocabCard'
import SubjectSidebar from '../../components/feature/SubjectSidebar'

export default function English() {
  const { progress, completeContent } = useAppState()
  const [activeId, setActiveId] = useState(ENGLISH_WORDS[0]?.id || '')
  const activeWord = ENGLISH_WORDS.find((w) => w.id === activeId)

  const sidebarItems = ENGLISH_WORDS.map((w) => ({
    id: w.id,
    title: w.word,
    completed: progress.english.includes(w.id),
  }))

  return (
    <div className="grid gap-4 lg:grid-cols-4">
      <div className="lg:col-span-1">
        <SubjectSidebar items={sidebarItems} activeId={activeId} onSelect={setActiveId} />
      </div>
      <div className="lg:col-span-3">
        <div className="card">
          <h1 className="text-xl font-bold">英语功法 · 主题词群</h1>
          {activeWord && (
            <VocabCard
              word={activeWord}
              completed={progress.english.includes(activeWord.id)}
              onComplete={() => completeContent('english', activeWord.id, 10)}
            />
          )}
        </div>
      </div>
    </div>
  )
}
