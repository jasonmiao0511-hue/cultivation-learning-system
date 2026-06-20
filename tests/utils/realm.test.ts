import { describe, it, expect } from 'vitest'
import { calculateRealm, calculateCultivation, REALMS } from '../../src/utils/realm'

describe('calculateRealm', () => {
  it('returns 凡人 for 0 cultivation', () => {
    expect(calculateRealm(0).name).toBe('凡人')
  })
  it('returns 炼气 just above threshold', () => {
    expect(calculateRealm(80).name).toBe('炼气')
  })
  it('returns 筑基 at exact threshold', () => {
    expect(calculateRealm(400).name).toBe('筑基')
  })
  it('returns 筑基 for 500 cultivation', () => {
    expect(calculateRealm(500).name).toBe('筑基')
  })
  it('returns 金丹 at exact threshold', () => {
    expect(calculateRealm(1000).name).toBe('金丹')
  })
  it('returns 渡劫 for max cultivation', () => {
    expect(calculateRealm(10000).name).toBe('渡劫')
  })
})

describe('calculateCultivation', () => {
  it('returns base minutes when combo is 1', () => {
    expect(calculateCultivation(30, 1)).toBe(30)
  })
  it('returns base minutes when combo is 2', () => {
    expect(calculateCultivation(30, 2)).toBe(30)
  })
  it('adds bonus for combo = 3', () => {
    expect(calculateCultivation(30, 3)).toBe(39)
  })
  it('adds bonus for combo = 10', () => {
    expect(calculateCultivation(10, 10)).toBe(20)
  })
  it('floors bonus for combo = 3 with odd base', () => {
    expect(calculateCultivation(10, 3)).toBe(13)
  })
})

describe('REALMS', () => {
  it('has increasing thresholds', () => {
    for (let i = 1; i < REALMS.length; i++) {
      expect(REALMS[i].threshold).toBeGreaterThan(REALMS[i - 1].threshold)
    }
  })
})
