export interface Operation {
  quantity: number
  from: number
  to: number
}

type StackOfCrates = string[]
export type StacksOfCrates = StackOfCrates[]

export const INITIAL_STACKS: StacksOfCrates = [
  ['R', 'P', 'C', 'D', 'B', 'G'],
  ['H', 'V', 'G'],
  ['N', 'S', 'Q', 'D', 'J', 'P', 'M'],
  ['P', 'S', 'L', 'G', 'D', 'C', 'N', 'M'],
  ['J', 'B', 'N', 'C', 'P', 'F', 'L', 'S'],
  ['Q', 'B', 'D', 'Z', 'V', 'G', 'T', 'S'],
  ['B', 'Z', 'M', 'H', 'F', 'T', 'Q'],
  ['C', 'M', 'D', 'B', 'F'],
  ['F', 'C', 'Q', 'G'],
]
