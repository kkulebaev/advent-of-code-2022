export function detectStartOfPacketMarker(
  datastream: string,
  uniqQuantity = 4
): number {
  const streamLetters = datastream.split('')
  let resultIndex = -1

  for (let i = 0; i < streamLetters.length; i++) {
    const startInd = i
    const endInd = i + uniqQuantity

    const buffer = streamLetters.slice(startInd, endInd)

    const set = new Set()
    buffer.reduce((acc, letter) => {
      acc.add(letter)
      return acc
    }, set)

    if (set.size >= uniqQuantity) {
      resultIndex = endInd
      break
    }
  }

  return resultIndex
}
