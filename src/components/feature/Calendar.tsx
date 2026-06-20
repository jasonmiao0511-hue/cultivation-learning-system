import type { DailyRecord } from '../../types'

interface Props {
  records: Record<string, DailyRecord>
  year: number
  month: number
}

export default function Calendar({ records, year, month }: Props) {
  const firstDay = new Date(year, month - 1, 1).getDay()
  const daysInMonth = new Date(year, month, 0).getDate()
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  return (
    <div className="card">
      <div className="mb-4 text-center font-bold">{year}年{month}月</div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {['日', '一', '二', '三', '四', '五', '六'].map((d) => <div key={d} className="text-slate-500">{d}</div>)}
        {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
        {days.map((day) => {
          const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
          const record = records[dateStr]
          let bg = 'bg-slate-800'
          if (record && record.completedCount > 0) bg = 'bg-emerald-600'
          else if (record) bg = 'bg-emerald-900/40'
          return (
            <div key={day} className={`rounded p-2 ${bg}`}>{day}</div>
          )
        })}
      </div>
    </div>
  )
}
