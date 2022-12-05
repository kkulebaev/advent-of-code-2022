import { describe, expect, it } from 'vitest'
import { findElfCarryingTheMostCalories, findTopElvesCarryingTheMostCalories } from './day1.js'
import { readFile } from './../utils.js'

const inputPath = 'src/day1/input.txt'

const data = readFile(inputPath)

describe('Day 1 (puzzle)', () => {
  it('part 1 should have answer', () => {
    const result = findElfCarryingTheMostCalories(data)
    expect(result).toEqual(72240)
  })

  it('part 2 should have answer', () => {
    const result = findTopElvesCarryingTheMostCalories(data)
    expect(result).toEqual(210957)
  })
})
