import type { CustomTask, Progress, Task } from '../types'
import { addDays } from '../utils/date'
import { generateId } from '../utils/id'
import { ENGLISH_WORDS } from '../mocks/englishData'
import { CHINESE_LESSONS } from '../mocks/chineseData'
import { MATH_TOPICS } from '../mocks/mathData'

const START_DATE = '2026-06-25'
const END_DATE = '2026-08-25'

export function generateDailyPlan(date: string, progress: Progress, customTasks: CustomTask[]): Task[] {
  const dayIndex = Math.max(0, Math.floor((new Date(date).getTime() - new Date(START_DATE).getTime()) / (1000 * 60 * 60 * 24)))
  const tasks: Task[] = []

  // 英语：每天 2 个新词（演示用少量，真实环境扩展）
  const englishStart = dayIndex * 2
  const englishWords = ENGLISH_WORDS.slice(englishStart, englishStart + 2)
  englishWords.forEach((word) => {
    tasks.push({
      id: generateId('task'),
      title: `击败 ${word.word}`,
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
    const reviewDayIndex = Math.floor((new Date(reviewDate).getTime() - new Date(START_DATE).getTime()) / (1000 * 60 * 60 * 24))
    const reviewWords = ENGLISH_WORDS.slice(reviewDayIndex * 2, reviewDayIndex * 2 + 2)
    reviewWords.forEach((word) => {
      tasks.push({
        id: generateId('task'),
        title: `复习 ${word.word}`,
        subject: 'english',
        type: 'review',
        duration: 5,
        priority: 'high',
        completed: false,
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
      title: `参悟 ${chineseLesson.title}`,
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
      title: `攻克 ${mathTopic.title}`,
      subject: 'math',
      type: 'learn',
      duration: 25,
      priority: 'medium',
      completed: progress.math.includes(mathTopic.id),
      source: 'auto',
      contentId: mathTopic.id,
    })
  }

  // 自定义任务
  customTasks.forEach((ct) => {
    if (ct.repeatRule === 'daily' || (ct.repeatRule === 'weekly' && new Date(date).getDay() !== 0)) {
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

  return tasks
}
