import { describe, expect, it } from 'vitest'
import { sumPrioritiesItemTypes } from './day3'
import { readDay3 } from '../utils'

const inputPath = 'src/day3/input.txt'

const data = readDay3(inputPath)

describe('Day 3 (puzzle)', () => {
  it('part 1 should have answer', () => {
    const result = sumPrioritiesItemTypes(data)
    expect(result).toEqual(8072)
  })

  it.todo('part 2 should have answer', () => {
    // const result = sumPrioritiesItemTypes(data)
    // expect(result).toEqual(9541)
  })
})
