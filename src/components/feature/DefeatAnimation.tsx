import { useEffect, useState } from 'react'

interface Props {
  show: boolean
  onDone: () => void
}

export default function DefeatAnimation({ show, onDone }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setVisible(true)
      const t = setTimeout(() => { setVisible(false); onDone() }, 1200)
      return () => clearTimeout(t)
    }
  }, [show])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="animate-bounce text-center">
        <div className="text-6xl">⚔️</div>
        <div className="mt-4 text-2xl font-bold text-realm-400">妖兽已击败！</div>
        <div className="text-slate-300">修为 +10</div>
      </div>
    </div>
  )
}
