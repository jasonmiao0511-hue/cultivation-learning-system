import { useState } from 'react'
import type { VocabWord } from '../../types'

interface Props {
  word: VocabWord
  completed: boolean
  onComplete: () => void
}

export default function VocabCard({ word, completed, onComplete }: Props) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className={`card cursor-pointer transition ${completed ? 'border-emerald-500' : ''}`}
    >
      {!flipped ? (
        <div>
          <div className="text-2xl font-bold">{word.word}</div>
          <div className="text-sm text-slate-400">{word.phonetic}</div>
          <div className="mt-2 text-xs text-realm-400">{word.group}</div>
        </div>
      ) : (
        <div>
          <div className="font-bold">{word.meaning}</div>
          <div className="text-sm text-slate-400">{word.partOfSpeech}</div>
          <div className="mt-2 text-sm">{word.example}</div>
        </div>
      )}
      {!completed && (
        <button
          onClick={(e) => { e.stopPropagation(); onComplete() }}
          className="btn-primary mt-3 w-full"
        >
          标记掌握
        </button>
      )}
    </div>
  )
}
