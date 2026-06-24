const BADGES = [
  { id: 'first', name: '初出茅庐', condition: '首次打卡' },
  { id: 'streak7', name: '七日打卡', condition: '连续 7 天打卡' },
  { id: 'streak30', name: '月余打卡', condition: '连续 30 天打卡' },
  { id: 'kill100', name: '百题百胜', condition: '完成 100 个任务' },
  { id: 'cult1000', name: '千分学分', condition: '累计 1000 学分' },
  { id: 'complete', name: '全科完成', condition: '完成所有课程' },
]

interface Props {
  streak: number
  totalCompleted: number
  cultivation: number
  allComplete: boolean
}

export default function BadgeList({ streak, totalCompleted, cultivation, allComplete }: Props) {
  const unlocked = new Set<string>()
  if (totalCompleted >= 1) unlocked.add('first')
  if (streak >= 7) unlocked.add('streak7')
  if (streak >= 30) unlocked.add('streak30')
  if (totalCompleted >= 100) unlocked.add('kill100')
  if (cultivation >= 1000) unlocked.add('cult1000')
  if (allComplete) unlocked.add('complete')

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {BADGES.map((b) => {
        const isUnlocked = unlocked.has(b.id)
        return (
          <div key={b.id} className={`card ${isUnlocked ? 'border-realm-500' : 'opacity-50'}`}>
            <div className="text-2xl">{isUnlocked ? '🏆' : '🔒'}</div>
            <div className="font-bold">{b.name}</div>
            <div className="text-xs text-slate-400">{b.condition}</div>
          </div>
        )
      })}
    </div>
  )
}
