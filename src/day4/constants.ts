type RangeStart = number
type RangeEnd = number

interface Range {
  start: RangeStart
  end: RangeEnd
}

export interface PairElf {
  elf1: Range
  elf2: Range
}
