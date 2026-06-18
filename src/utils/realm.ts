export interface Realm {
  name: string
  threshold: number
}

export const REALMS: Realm[] = [
  { name: '凡人', threshold: 0 },
  { name: '炼气', threshold: 60 },
  { name: '筑基', threshold: 300 },
  { name: '金丹', threshold: 900 },
  { name: '元婴', threshold: 1800 },
  { name: '化神', threshold: 3600 },
  { name: '渡劫', threshold: 7200 },
]

export function calculateRealm(cultivation: number): Realm {
  let current = REALMS[0]
  for (const realm of REALMS) {
    if (cultivation >= realm.threshold) {
      current = realm
    }
  }
  return current
}

export function calculateCultivation(minutes: number, combo: number): number {
  const base = minutes
  const bonus = combo >= 3 ? Math.floor(base * 0.1 * combo) : 0
  return base + bonus
}
