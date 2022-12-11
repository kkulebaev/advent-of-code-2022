import { describe, expect, it } from 'vitest'
import { getCountVisibleTrees } from './day8'
import { readFileDay8 } from '../utils'

const data = readFileDay8('src/day8/input.txt')

describe('Day 6 (puzzle)', () => {
  it('part 1 should have answer', () => {
    const result = getCountVisibleTrees(data)
    expect(result).toEqual(1733)
  })

  it.todo('part 2 should have answer', () => {
    const result = getCountVisibleTrees(data)
    expect(result).toEqual(2265)
  })
})
