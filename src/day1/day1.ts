import type { FoodCalories, AllElvesCarryingCalories } from './constants'
import { sum } from '../utils'

/*
  ============== part1 ==============
*/

export function findElfCarryingTheMostCalories(
  data: AllElvesCarryingCalories
): FoodCalories {
  let max = 0

  data.forEach(el => {
    const amount = el.reduce(sum, 0)

    if (amount > max) {
      max = amount
    }
  })

  return max
}

/*
  ============== part2 ==============
*/

export function findTopElvesCarryingTheMostCalories(
  data: AllElvesCarryingCalories,
  amount = 3
): FoodCalories {
  let topLevelElves: FoodCalories[] = new Array(amount).fill(0)

  data.forEach(el => {
    const amount = el.reduce(sum, 0)

    for (let i = 0; i < topLevelElves.length; i++) {
      const elem = topLevelElves[i]

      if (amount > elem) {
        topLevelElves.splice(i, 0, amount)
        topLevelElves.pop()
        return
      }
    }
  })

  const result = topLevelElves.reduce(sum, 0)

  return result
}
