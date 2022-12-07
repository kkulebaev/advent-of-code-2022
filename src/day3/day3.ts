import {
  EncryptedString,
  Alphabet,
  AlphabetLetters,
  AlphabetLetter,
} from './constants'

export function sumPrioritiesItemTypes(data: EncryptedString[]): number {
  const result: AlphabetLetters = []

  data.forEach(encStr => {
    const halfLength = encStr.length / 2

    const firstHalf = encStr.slice(0, halfLength).split('')
    const secondHalf = encStr.slice(halfLength, encStr.length)

    for (let i = 0; i < firstHalf.length; i++) {
      const letter = firstHalf[i] as AlphabetLetter

      const hasLetter = secondHalf.includes(letter)

      if (hasLetter) {
        result.push(letter)
        return
      }
    }
  })

  const sum = result.reduce((acc, item) => acc + Alphabet[item], 0)

  return sum
}
