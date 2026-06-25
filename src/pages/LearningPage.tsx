import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAppState } from '../context/AppStateContext'
import { getContent } from '../services/content'
import { getChapterByContentId } from '../services/chapter'
import ExercisePanel from '../components/feature/ExercisePanel'
import type { SubjectType } from '../types'

export default function LearningPage() {
  const { id: subjectId, contentId } = useParams()
  const navigate = useNavigate()
  const { progress, completeContent } = useAppState()
  const [exercisesPassed, setExercisesPassed] = useState(false)

  const subject = subjectId as SubjectType
  const content = getContent(subject, contentId!)
  const chapter = content ? getChapterByContentId(subject, content.id) : undefined

  if (!content) return <div className="card">内容未找到</div>

  const completed = progress[subject].includes(content.id)
  const canComplete = exercisesPassed && !completed

  const currentIndex = chapter?.contentIds.indexOf(content.id) ?? -1
  const prevId = chapter && currentIndex > 0 ? chapter.contentIds[currentIndex - 1] : undefined
  const nextId = chapter && currentIndex < chapter.contentIds.length - 1 ? chapter.contentIds[currentIndex + 1] : undefined

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <button onClick={() => navigate(-1)} className="text-sm text-slate-400 hover:text-white">← 返回</button>
      <div className="card">
        <h1 className="text-2xl font-bold">{content.title}</h1>
        {content.type && <div className="text-sm text-slate-400">{content.type}</div>}
        <div className="mt-4 whitespace-pre-wrap leading-relaxed">{content.content}</div>
        {content.appreciation && <div className="mt-4 text-sm text-slate-400">赏析：{content.appreciation}</div>}
        {content.notes && content.notes.map((n, i) => <div key={i} className="mt-2 text-sm text-blue-400">💡 {n}</div>)}
        {content.example && <div className="card mt-4 bg-slate-700/50"><div className="font-bold">例题 / 例句</div><div className="mt-2">{content.example}</div></div>}
      </div>

      {!completed && (
        <ExercisePanel exercises={content.exercises} onComplete={() => setExercisesPassed(true)} />
      )}

      <div className="flex justify-between">
        {prevId ? (
          <button onClick={() => navigate(`/subject/${subjectId}/learn/${prevId}`)} className="btn-primary bg-slate-700">上一项</button>
        ) : <div />}
        <button
          onClick={() => completeContent(subject, content.id, 10)}
          disabled={!canComplete}
          className="btn-primary disabled:opacity-50"
        >
          {completed ? '已完成' : '标记为已完成'}
        </button>
        {nextId ? (
          <button onClick={() => navigate(`/subject/${subjectId}/learn/${nextId}`)} className="btn-primary bg-slate-700">下一项</button>
        ) : <div />}
      </div>
    </div>
  )
}
