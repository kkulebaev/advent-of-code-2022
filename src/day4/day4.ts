import { PairElf } from './constants'

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
