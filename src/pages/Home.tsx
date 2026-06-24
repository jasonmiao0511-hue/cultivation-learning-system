import { useState, useMemo } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useAppState } from '../context/AppStateContext'
import ChapterCard from '../components/feature/ChapterCard'
import SubjectNav from '../components/feature/SubjectNav'
import TodayBar from '../components/feature/TodayBar'
import { getChaptersBySubject, getChapterProgress } from '../services/chapter'
import { getLevelDisplayName } from '../utils/level'
import type { SubjectType } from '../types'

const VALID_SUBJECTS: SubjectType[] = ['chinese', 'math', 'english', 'history']

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const initialSubject = searchParams.get('subject') as SubjectType
  const [activeSubject, setActiveSubject] = useState<SubjectType>(
    VALID_SUBJECTS.includes(initialSubject) ? initialSubject : 'chinese',
  )
  const { progress, calculateStreak, tasks } = useAppState()

  const chapters = useMemo(() => getChaptersBySubject(activeSubject), [activeSubject])
  const completedTasks = useMemo(() => tasks.filter((t) => t.completed).length, [tasks])
  const level = getLevelDisplayName(progress.currentRealm)

  const handleSelect = (subject: SubjectType) => {
    setActiveSubject(subject)
    setSearchParams({ subject })
  }

  return (
    <div className="space-y-6">
      <TodayBar completedTasks={completedTasks} totalTasks={tasks.length} streak={calculateStreak()} level={level} />
      <div className="grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <SubjectNav activeSubject={activeSubject} onSelect={handleSelect} />
        </div>
        <div className="lg:col-span-3">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {chapters.map((chapter) => {
              const { completed, total } = getChapterProgress(chapter, progress)
              return (
                <ChapterCard
                  key={chapter.id}
                  chapter={chapter}
                  completed={completed}
                  total={total}
                  onClick={() => navigate(`/subject/${activeSubject}/chapter/${chapter.id}`)}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
