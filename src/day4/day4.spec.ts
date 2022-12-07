import { describe, expect, it } from 'vitest'
import { getAmountRangeFullyContain, getAmountRangePartContain } from './day4'
import { readFileDay4 } from '../utils'

const inputPath = 'src/day4/input.txt'

const data = readFileDay4(inputPath)

describe('Day 4 (puzzle)', () => {
  it('part 1 should have answer', () => {
    const result = getAmountRangeFullyContain(data)
    expect(result).toEqual(413)
  })

  it('part 2 should have answer', () => {
    const result = getAmountRangePartContain(data)
    expect(result).toEqual(806)
  })
})
