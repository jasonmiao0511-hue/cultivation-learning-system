import type { CustomTask, Progress, Task } from '../types'
import { addDays, parseLocalDate, daysBetween } from '../utils/date'
import { generateId } from '../utils/id'
import { ENGLISH_WORDS } from '../mocks/englishData'
import { CHINESE_LESSONS } from '../mocks/chineseData'
import { MATH_TOPICS } from '../mocks/mathData'
import { HISTORY_TOPICS } from '../mocks/historyData'

const START_DATE = '2026-06-25'
const END_DATE = '2026-08-25'

export { START_DATE, END_DATE }
export const TOTAL_DAYS = 62

export function generateDailyPlan(date: string, progress: Progress, customTasks: CustomTask[]): Task[] {
  const dayIndex = Math.max(0, daysBetween(START_DATE, date))
  const tasks: Task[] = []

  // 英语：每天 2 个新词
  const englishStart = dayIndex * 2
  const englishWords = ENGLISH_WORDS.slice(englishStart, englishStart + 2)
  englishWords.forEach((word) => {
    tasks.push({
      id: generateId('task'),
      title: `学习单词 ${word.word}`,
      subject: 'english',
      type: 'learn',
      duration: 10,
      priority: 'medium',
      completed: progress.english.includes(word.id),
      source: 'auto',
      contentId: word.id,
    })
  })

  // 艾宾浩斯复习
  ;[1, 2, 4, 7, 15].forEach((interval) => {
    const reviewDate = addDays(date, -interval)
    const reviewDayIndex = Math.max(0, daysBetween(START_DATE, reviewDate))
    const reviewWords = ENGLISH_WORDS.slice(reviewDayIndex * 2, reviewDayIndex * 2 + 2)
    reviewWords.forEach((word) => {
      tasks.push({
        id: generateId('task'),
        title: `复习单词 ${word.word}`,
        subject: 'english',
        type: 'review',
        duration: 5,
        priority: 'high',
        completed: progress.english.includes(word.id),
        source: 'auto',
        contentId: word.id,
      })
    })
  })

  // 语文
  const chineseLesson = CHINESE_LESSONS[dayIndex % CHINESE_LESSONS.length]
  if (chineseLesson) {
    tasks.push({
      id: generateId('task'),
      title: `学习 ${chineseLesson.title}`,
      subject: 'chinese',
      type: 'learn',
      duration: 25,
      priority: 'medium',
      completed: progress.chinese.includes(chineseLesson.id),
      source: 'auto',
      contentId: chineseLesson.id,
    })
  }

  // 数学
  const mathTopic = MATH_TOPICS[dayIndex % MATH_TOPICS.length]
  if (mathTopic) {
    tasks.push({
      id: generateId('task'),
      title: `学习 ${mathTopic.title}`,
      subject: 'math',
      type: 'learn',
      duration: 25,
      priority: 'medium',
      completed: progress.math.includes(mathTopic.id),
      source: 'auto',
      contentId: mathTopic.id,
    })
  }

  // 历史
  const historyTopic = HISTORY_TOPICS[dayIndex % HISTORY_TOPICS.length]
  if (historyTopic) {
    tasks.push({
      id: generateId('task'),
      title: `学习 ${historyTopic.title}`,
      subject: 'history',
      type: 'learn',
      duration: 20,
      priority: 'medium',
      completed: progress.history.includes(historyTopic.id),
      source: 'auto',
      contentId: historyTopic.id,
    })
  }

  // 自定义任务
  const dateDayOfWeek = parseLocalDate(date).getDay()
  customTasks.forEach((ct) => {
    const match =
      ct.repeatRule === 'daily' ||
      (ct.repeatRule === 'weekly' && (ct.dayOfWeek ?? dateDayOfWeek) === dateDayOfWeek)
    if (match) {
      tasks.push({
        id: generateId('task'),
        title: ct.name,
        subject: 'custom',
        type: 'practice',
        duration: ct.duration,
        priority: ct.priority,
        repeatRule: ct.repeatRule,
        completed: false,
        source: 'manual',
      })
    }
  })

  // 周末综合练习
  const dayOfWeek = parseLocalDate(date).getDay()
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    tasks.push({
      id: generateId('task'),
      title: '周末综合练习',
      subject: 'english',
      type: 'practice',
      duration: 30,
      priority: 'high',
      completed: false,
      source: 'auto',
    })
  }

  return tasks
}
