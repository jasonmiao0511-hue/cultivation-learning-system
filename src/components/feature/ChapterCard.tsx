import type { Chapter } from '../../types'

interface Props {
  chapter: Chapter
  completed: number
  total: number
  onClick: () => void
}

export default function ChapterCard({ chapter, completed, total, onClick }: Props) {
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0
  return (
    <button
      onClick={onClick}
      className="card w-full text-left transition hover:border-blue-500 focus:border-blue-500"
      aria-label={`进入 ${chapter.title}`}
    >
      <h3 className="text-lg font-bold">{chapter.title}</h3>
      <p className="mt-2 text-sm text-slate-400 line-clamp-2">{chapter.summary}</p>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-700">
        <div className="h-full bg-blue-500 transition-all" style={{ width: `${percent}%` }} />
      </div>
      <div className="mt-2 text-xs text-slate-400">{completed} / {total} 完成</div>
    </button>
  )
}
