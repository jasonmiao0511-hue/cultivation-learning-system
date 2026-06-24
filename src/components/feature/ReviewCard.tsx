import { useState } from 'react'
import type { LearningContent } from '../../services/content'
import type { ReviewRating } from '../../services/review'

interface Props {
  content: LearningContent
  onRate: (rating: ReviewRating) => void
}

export default function ReviewCard({ content, onRate }: Props) {
  const [revealed, setRevealed] = useState(false)

  const prompt = content.subject === 'english'
    ? content.title
    : content.title

  const answer = content.meta?.meaning ?? content.content.slice(0, 80)

  return (
    <div className="card mx-auto max-w-xl space-y-6 text-center">
      <div className="text-sm text-slate-400">{content.subject} · {content.type}</div>
      <h2 className="text-3xl font-bold">{prompt}</h2>
      {!revealed ? (
        <button onClick={() => setRevealed(true)} className="btn-primary">显示答案</button>
      ) : (
        <>
          <div className="rounded-lg bg-slate-700 p-4 text-lg">{answer}</div>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => onRate('forgot')} className="rounded bg-red-600 px-4 py-2 text-white">忘记了</button>
            <button onClick={() => onRate('hard')} className="rounded bg-amber-600 px-4 py-2 text-white">有点模糊</button>
            <button onClick={() => onRate('good')} className="rounded bg-blue-600 px-4 py-2 text-white">记住了</button>
            <button onClick={() => onRate('easy')} className="rounded bg-emerald-600 px-4 py-2 text-white">太简单了</button>
          </div>
        </>
      )}
    </div>
  )
}
