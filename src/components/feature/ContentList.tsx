import { getContent } from '../../services/content'
import { isContentUnlocked } from '../../services/chapter'
import type { Chapter, Progress } from '../../types'

interface Props {
  chapter: Chapter
  progress: Progress
  onStart: (contentId: string) => void
}

export default function ContentList({ chapter, progress, onStart }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {chapter.contentIds.map((id) => {
        const content = getContent(chapter.subject, id)
        const unlocked = isContentUnlocked(chapter, id, progress)
        const completed = progress[chapter.subject].includes(id)
        return (
          <div
            key={id}
            className={`card ${unlocked ? '' : 'opacity-50'} ${completed ? 'border-emerald-500' : ''}`}
          >
            <div className="font-bold">{content?.title ?? id}</div>
            <div className="text-xs text-slate-400">{content?.type}</div>
            {!unlocked && <div className="mt-2 text-xs text-slate-500">🔒 先完成上一项</div>}
            {unlocked && !completed && (
              <button onClick={() => onStart(id)} className="btn-primary mt-3">开始学习</button>
            )}
            {completed && <div className="mt-3 text-emerald-400">已完成 ✓</div>}
          </div>
        )
      })}
    </div>
  )
}
