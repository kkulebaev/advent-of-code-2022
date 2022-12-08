import type { Operation, StackOfCrates, StacksOfCrates } from './constants'

/*
  ============== part1 ==============
*/
export function getCrateEndsUpOnTop(
  data: StacksOfCrates,
  operations: Operation[]
): string {
  const result: StackOfCrates = []

  operations.forEach(operation => {
    for (let i = 0; i < operation.quantity; i++) {
      const topElement = data[operation.from - 1].pop()

      if (topElement) {
        data[operation.to - 1].push(topElement)
      }
    }
  })

  data.forEach(item => {
    const topElement = item.pop()

    if (topElement) {
      result.push(topElement)
    }
  })

  return result.reduce((acc, item) => acc + item, '')
}
