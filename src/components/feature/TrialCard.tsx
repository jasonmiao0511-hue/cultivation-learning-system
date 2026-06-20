interface Props {
  title: string
  onStart: () => void
}

export default function TrialCard({ title, onStart }: Props) {
  return (
    <div className="card border-amber-500">
      <div className="text-2xl">⚔️</div>
      <div className="font-bold">{title}</div>
      <button onClick={onStart} className="btn-primary mt-2">开始试炼</button>
    </div>
  )
}
