export function getToday(): string {
  return new Date().toISOString().split('T')[0]
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return `${d.getMonth() + 1}月${d.getDate()}日`
}

export function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr)
  d.setDate(d.getDate() + days)
  return d.toISOString().split('T')[0]
}

export function daysBetween(start: string, end: string): number {
  const a = new Date(start)
  const b = new Date(end)
  return Math.floor((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))
}
