import type { SubjectType } from '../../types'

const SUBJECTS: { id: SubjectType; label: string }[] = [
  { id: 'chinese', label: '语文' },
  { id: 'math', label: '数学' },
  { id: 'english', label: '英语' },
  { id: 'history', label: '历史' },
]

interface Props {
  activeSubject: SubjectType
  onSelect: (subject: SubjectType) => void
}

export default function SubjectNav({ activeSubject, onSelect }: Props) {
  return (
    <nav className="space-y-2" aria-label="学科导航">
      {SUBJECTS.map((s) => (
        <button
          key={s.id}
          onClick={() => onSelect(s.id)}
          className={`w-full rounded-lg px-4 py-2 text-left transition ${
            activeSubject === s.id
              ? 'bg-blue-600 text-white'
              : 'text-slate-300 hover:bg-slate-800'
          }`}
          aria-pressed={activeSubject === s.id}
        >
          {s.label}
        </button>
      ))}
    </nav>
  )
}
