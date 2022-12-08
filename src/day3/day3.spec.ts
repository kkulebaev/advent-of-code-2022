import { describe, expect, it } from 'vitest'
import { sumPrioritiesItemTypes, sumPrioritiesItemTypes2 } from './day3'
import { readFileSplitedByLine } from '../utils'

const inputPath = 'src/day3/input.txt'

const data = readFileSplitedByLine(inputPath)

describe('Day 3 (puzzle)', () => {
  it('part 1 should have answer', () => {
    const result = sumPrioritiesItemTypes(data)
    expect(result).toEqual(8072)
  })

  it('part 2 should have answer', () => {
    const result = sumPrioritiesItemTypes2(data)
    expect(result).toEqual(2567)
  })
})
