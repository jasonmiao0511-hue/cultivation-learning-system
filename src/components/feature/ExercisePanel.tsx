import { useState } from 'react'
import type { Exercise } from '../../types'

interface Props {
  exercises: Exercise[]
  onComplete: () => void
}

export default function ExercisePanel({ exercises, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string, string | number>>({})
  const [submitted, setSubmitted] = useState(false)

  const allCorrect = exercises.every((ex) => answers[ex.id] === ex.answer)

  const handleSubmit = () => {
    setSubmitted(true)
    if (allCorrect) onComplete()
  }

  return (
    <div className="card space-y-4">
      <h3 className="font-bold">练习</h3>
      {exercises.map((ex) => {
        const userAnswer = answers[ex.id]
        const isCorrect = userAnswer === ex.answer
        return (
          <div key={ex.id} className="space-y-2">
            <div>{ex.question}</div>
            {ex.type === 'choice' && ex.options && (
              <div className="grid gap-2">
                {ex.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setAnswers((a) => ({ ...a, [ex.id]: idx }))}
                    className={`rounded px-3 py-2 text-left ${
                      userAnswer === idx ? 'bg-blue-600 text-white' : 'bg-slate-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
            {ex.type === 'fill' && (
              <input
                type="text"
                value={(userAnswer as string) ?? ''}
                onChange={(e) => setAnswers((a) => ({ ...a, [ex.id]: e.target.value }))}
                className="w-full rounded bg-slate-700 px-3 py-2 text-white"
                placeholder="请输入答案"
              />
            )}
            {submitted && (
              <div className={isCorrect ? 'text-emerald-400' : 'text-red-400'}>
                {isCorrect ? '正确' : `错误，答案：${ex.answer}`}
              </div>
            )}
          </div>
        )
      })}
      <button onClick={handleSubmit} className="btn-primary">提交</button>
    </div>
  )
}
