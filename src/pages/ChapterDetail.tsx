import { useParams, useNavigate } from 'react-router-dom'
import { useAppState } from '../context/AppStateContext'
import { getChapterById, getChapterProgress } from '../services/chapter'
import ContentList from '../components/feature/ContentList'
import type { SubjectType } from '../types'

export default function ChapterDetail() {
  const { id: subjectId, chapterId } = useParams()
  const navigate = useNavigate()
  const { progress } = useAppState()

  const chapter = getChapterById(subjectId as SubjectType, chapterId!)
  if (!chapter) return <div className="card">章节未找到</div>

  const { completed, total } = getChapterProgress(chapter, progress)
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="space-y-6">
      <button onClick={() => navigate(`/?subject=${subjectId}`)} className="text-sm text-slate-400 hover:text-white">
        ← 返回课程大厅
      </button>
      <div className="card">
        <h1 className="text-2xl font-bold">{chapter.title}</h1>
        <p className="mt-2 text-slate-400">{chapter.summary}</p>
        <ul className="mt-4 list-inside list-disc text-sm text-slate-300">
          {chapter.objectives.map((o, i) => <li key={i}>{o}</li>)}
        </ul>
        <div className="mt-4 h-3 rounded-full bg-slate-700">
          <div className="h-full rounded-full bg-blue-500" style={{ width: `${percent}%` }} />
        </div>
        <div className="mt-2 text-sm text-slate-400">{completed} / {total} 完成</div>
      </div>
      <ContentList
        chapter={chapter}
        progress={progress}
        onStart={(contentId) => navigate(`/subject/${subjectId}/learn/${contentId}`)}
      />
    </div>
  )
}
