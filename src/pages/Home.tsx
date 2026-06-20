import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useAppState } from '../context/AppStateContext'
import RealmBadge from '../components/feature/RealmBadge'
import TaskSummary from '../components/feature/TaskSummary'
import ProgressBar from '../components/base/ProgressBar'
import { QUOTES } from '../mocks/quotes'
import { CHINESE_LESSONS } from '../mocks/chineseData'
import { MATH_TOPICS } from '../mocks/mathData'
import { ENGLISH_WORDS } from '../mocks/englishData'
import { getToday } from '../utils/date'

export default function Home() {
  const { progress, customTasks, calculateStreak, getRecord, tasks } = useAppState()
  const quote = useMemo(() => QUOTES[Math.floor(Math.random() * QUOTES.length)], [])

  const todayRecord = getRecord(getToday())
  const totalEnglish = ENGLISH_WORDS.length
  const totalChinese = CHINESE_LESSONS.length
  const totalMath = MATH_TOPICS.length

  return (
    <div className="space-y-4">
      <div className="card bg-gradient-to-r from-realm-900 to-slate-800">
        <h1 className="text-2xl font-bold">道友，今日该闭关了</h1>
        <p className="mt-2 text-slate-300">「{quote}」</p>
        <Link to="/daily" className="btn-primary mt-4 inline-block">开始历练</Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <RealmBadge realm={progress.currentRealm} cultivation={progress.totalCultivation} />
        <TaskSummary tasks={tasks} />
        <div className="card"><div className="text-sm text-slate-400">连续闭关</div><div className="text-2xl font-bold">{calculateStreak()} 天</div></div>
        <div className="card"><div className="text-sm text-slate-400">今日修为</div><div className="text-2xl font-bold">{todayRecord.cultivation}</div></div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="card">
          <div className="mb-2 font-bold text-realm-400">英语功法</div>
          <ProgressBar value={progress.english.length} max={totalEnglish} />
        </div>
        <div className="card">
          <div className="mb-2 font-bold text-emerald-400">语文功法</div>
          <ProgressBar value={progress.chinese.length} max={totalChinese} />
        </div>
        <div className="card">
          <div className="mb-2 font-bold text-amber-400">数学功法</div>
          <ProgressBar value={progress.math.length} max={totalMath} />
        </div>
      </div>
    </div>
  )
}
