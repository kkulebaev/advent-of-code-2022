import { describe, expect, it } from 'vitest'
import { totalScoreOfStrategyGuide, totalScoreOfStrategyGuide2 } from './day2'
import { readFileToString } from './../utils'

const inputPath = 'src/day2/input.txt'

const data = readFileToString(inputPath)

describe('Day 2 (puzzle)', () => {
  it('part 1 should have answer', () => {
    const result = totalScoreOfStrategyGuide(data)
    expect(result).toEqual(10595)
  })

  it('part 2 should have answer', () => {
    const result = totalScoreOfStrategyGuide2(data)
    expect(result).toEqual(9541)
  })
})
