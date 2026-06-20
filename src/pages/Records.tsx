import { useMemo } from 'react'
import { useRecords } from '../hooks/useRecords'
import { useProgress } from '../hooks/useProgress'
import Calendar from '../components/feature/Calendar'
import BadgeList from '../components/feature/BadgeList'

export default function Records() {
  const { records, calculateStreak } = useRecords()
  const { progress } = useProgress()

  const totalCompleted = useMemo(() =>
    Object.values(records).reduce((sum, r) => sum + r.completedCount, 0),
    [records]
  )
  const totalDuration = useMemo(() =>
    Object.values(records).reduce((sum, r) => sum + r.totalDuration, 0),
    [records]
  )

  const allComplete = progress.english.length >= 60 && progress.chinese.length >= 13 && progress.math.length >= 2

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card"><div className="text-sm text-slate-400">累计闭关天数</div><div className="text-2xl font-bold">{Object.keys(records).length}</div></div>
        <div className="card"><div className="text-sm text-slate-400">累计修为</div><div className="text-2xl font-bold">{progress.totalCultivation}</div></div>
        <div className="card"><div className="text-sm text-slate-400">击败妖兽</div><div className="text-2xl font-bold">{totalCompleted}</div></div>
        <div className="card"><div className="text-sm text-slate-400">连续闭关</div><div className="text-2xl font-bold">{calculateStreak()}</div></div>
      </div>

      <Calendar records={records} year={2026} month={7} />
      <Calendar records={records} year={2026} month={8} />

      <h2 className="text-lg font-bold">成就徽章</h2>
      <BadgeList streak={calculateStreak()} totalCompleted={totalCompleted} cultivation={progress.totalCultivation} allComplete={allComplete} />
    </div>
  )
}
