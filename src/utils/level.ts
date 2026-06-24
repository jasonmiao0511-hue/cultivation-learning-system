import { REALMS } from './realm'

export function getLevelNumber(realmName: string): number {
  const index = REALMS.findIndex((r) => r.name === realmName)
  return index >= 0 ? index + 1 : 1
}

export function getLevelDisplayName(realmName: string): string {
  return `Lv.${getLevelNumber(realmName)}`
}
