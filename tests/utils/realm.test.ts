import { describe, it, expect } from 'vitest'
import { calculateRealm, calculateCultivation } from '../../src/utils/realm'

describe('calculateRealm', () => {
  it('returns 凡人 for 0 cultivation', () => {
    expect(calculateRealm(0).name).toBe('凡人')
  })
  it('returns 筑基 for 500 cultivation', () => {
    expect(calculateRealm(500).name).toBe('筑基')
  })
  it('returns 渡劫 for 10000 cultivation', () => {
    expect(calculateRealm(10000).name).toBe('渡劫')
  })
})

describe('calculateCultivation', () => {
  it('returns base minutes when combo is 1', () => {
    expect(calculateCultivation(30, 1)).toBe(30)
  })
  it('adds bonus for combo >= 3', () => {
    expect(calculateCultivation(30, 3)).toBe(39)
  })
})
