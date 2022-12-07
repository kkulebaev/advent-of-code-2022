import { PairElf } from './constants'

/*
  ============== part1 ==============
*/
export function getAmountRangeFullyContain(data: PairElf[]): number {
  let amount = 0

  data.forEach(elfPair => {
    const isEqualStart = elfPair.elf1.start === elfPair.elf2.start
    const isEqualEnd = elfPair.elf1.end === elfPair.elf2.end
    if (isEqualStart || isEqualEnd) {
      amount++
      return
    }

    if (elfPair.elf1.start > elfPair.elf2.start) {
      if (elfPair.elf1.end < elfPair.elf2.end) {
        amount++
      }
    } else {
      if (elfPair.elf2.end < elfPair.elf1.end) {
        amount++
      }
    }
  })

  return amount
}

/*
  ============== part2 ==============
*/
export function getAmountRangePartContain(data: PairElf[]): number {
  let amount = 0

  data.forEach(elfPair => {
    const isEqualStart = elfPair.elf1.start === elfPair.elf2.start
    const isEqualEnd = elfPair.elf1.end === elfPair.elf2.end
    const isEqualStartEnd = elfPair.elf1.start === elfPair.elf2.end
    const isEqualEndStart = elfPair.elf1.end === elfPair.elf2.start
    if (isEqualStart || isEqualEnd || isEqualStartEnd || isEqualEndStart) {
      amount++
      return
    }

    if (elfPair.elf1.start > elfPair.elf2.start) {
      if (elfPair.elf1.start < elfPair.elf2.end) {
        amount++
      }
    } else {
      if (elfPair.elf1.end > elfPair.elf2.start) {
        amount++
      }
    }
  })

  return amount
}
