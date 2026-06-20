import { useEffect, useState } from 'react'

interface Props {
  realm: string
  onDone: () => void
}

export default function RealmUpAnimation({ realm, onDone }: Props) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => { setVisible(false); onDone() }, 2500)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="text-center">
        <div className="text-6xl">✨</div>
        <div className="mt-4 text-3xl font-bold text-amber-400">境界突破！</div>
        <div className="mt-2 text-xl">恭喜道友晋升「{realm}」</div>
      </div>
    </div>
  )
}
