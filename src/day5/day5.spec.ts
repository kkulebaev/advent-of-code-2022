import { describe, expect, it } from 'vitest'
import { getCrateEndsUpOnTop } from './day5'
import { readFileDay5 } from '../utils'
import { INITIAL_STACKS } from './constants'

const inputPath = 'src/day5/input.txt'

const data = readFileDay5(inputPath)

describe('Day 4 (puzzle)', () => {
  it('part 1 should have answer', () => {
    const result = getCrateEndsUpOnTop(INITIAL_STACKS, data)
    expect(result).toEqual('TLNGFGMFN')
  })

  it.todo('part 2 should have answer', () => {
    // const result = getAmountRangePartContain(data)
    // expect(result).toEqual(806)
  })
})
