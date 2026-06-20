import { useState, useEffect, useRef } from 'react'

interface Props {
  onComplete?: (minutes: number) => void
}

export default function FocusTimer({ onComplete }: Props) {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const secondsRef = useRef(0)
  const preset = useRef(25)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => {
          const next = s + 1
          secondsRef.current = next
          if (preset.current > 0 && next >= preset.current * 60) {
            setRunning(false)
            if (onCompleteRef.current) onCompleteRef.current(preset.current)
            return preset.current * 60
          }
          return next
        })
      }, 1000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [running])

  const start = (min: number) => {
    preset.current = min
    secondsRef.current = 0
    setSeconds(0)
    setRunning(true)
  }

  const stop = () => {
    setRunning(false)
    if (onCompleteRef.current) onCompleteRef.current(Math.ceil(secondsRef.current / 60))
  }

  const displayMin = Math.floor(seconds / 60).toString().padStart(2, '0')
  const displaySec = (seconds % 60).toString().padStart(2, '0')

  return (
    <div className="card sticky top-20">
      <div className="text-center text-4xl font-mono font-bold">{displayMin}:{displaySec}</div>
      <div className="mt-4 flex justify-center gap-2">
        {[15, 25, 45].map((m) => (
          <button key={m} onClick={() => start(m)} className="btn-primary" aria-pressed={running && preset.current === m}>{m}分</button>
        ))}
      </div>
      {running && <button onClick={stop} className="btn-primary mt-2 w-full bg-red-600 hover:bg-red-500">结束计时</button>}
    </div>
  )
}
