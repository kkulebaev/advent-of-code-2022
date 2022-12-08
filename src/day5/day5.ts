import type { Operation, StacksOfCrates } from './constants'

/*
  ============== part1 ==============
*/
export function getCrateEndsUpOnTop(
  stacks: StacksOfCrates,
  operations: Operation[]
): string {
  const data: StacksOfCrates = JSON.parse(JSON.stringify(stacks))

  operations.forEach(operation => {
    for (let i = 0; i < operation.quantity; i++) {
      const topElement = data[operation.from - 1].pop()

      if (topElement) {
        data[operation.to - 1].push(topElement)
      }
    }
  })

  return data.reduce((acc, item) => acc + item.at(-1), '')
}

/*
  ============== part2 ==============
*/

export function getCrateEndsUpOnTop2(
  stacks: StacksOfCrates,
  operations: Operation[]
): string {
  const data: StacksOfCrates = JSON.parse(JSON.stringify(stacks))

  operations.forEach(operation => {
    const stack = data[operation.from - 1]
    const rearrangementElements = stack.splice(
      stack.length - operation.quantity,
      operation.quantity
    )
    data[operation.to - 1].push(...rearrangementElements)
  })

  return data.reduce((acc, item) => acc + item.at(-1), '')
}
