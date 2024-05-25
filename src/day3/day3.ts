import { EncryptedString, Alphabet, AlphabetLetters, AlphabetLetter } from './constants'

import { chunkedArray } from '../utils'

/*
  ============== part1 ==============
*/

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

/*
  ============== part2 ==============
*/

export function sumPrioritiesItemTypes2(data: EncryptedString[]): number {
  const chunckedData = chunkedArray(data, 3)
  const result: AlphabetLetters = []

  chunckedData.forEach(group => {
    const possibleLetters = group[0].split('')

    for (let i = 0; i < possibleLetters.length; i++) {
      const letter = possibleLetters[i] as AlphabetLetter

      if (group[1].includes(letter)) {
        if (group[2].includes(letter)) {
          result.push(letter)
          break
        }
      }
    }
  })

  const sum = result.reduce((acc, item) => acc + Alphabet[item], 0)

  return sum
}
