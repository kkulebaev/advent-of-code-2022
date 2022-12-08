import fs from 'fs'
import path from 'path'
import type { AllElvesCarryingCalories } from './day1/constants'
import type { ShapePairs } from './day2/constants'
import type { EncryptedString } from './day3/constants'
import type { PairElf } from './day4/constants'
import type { Operation } from './day5/constants'

export function readFileDay1(pathFile: string): AllElvesCarryingCalories {
  const pathInput = path.resolve(pathFile)

  const inputString = fs.readFileSync(pathInput, 'utf-8')
  const inputArray = inputString
    .split('\n\n')
    .map(data => data.split('\n').map(x => +x))

  return inputArray
}

export function readFileDay2(pathFile: string): ShapePairs[] {
  const pathInput = path.resolve(pathFile)

  const inputString = fs.readFileSync(pathInput, 'utf-8')
  const inputArray = inputString
    .split('\n')
    .map(data => data.split(' ')) as ShapePairs[]

  return inputArray
}

export function readFileDay3(pathFile: string): EncryptedString[] {
  const pathInput = path.resolve(pathFile)

  const inputString = fs.readFileSync(pathInput, 'utf-8')
  const inputArray = inputString.split('\n')

  return inputArray
}

export function readFileDay4(pathFile: string): PairElf[] {
  const pathInput = path.resolve(pathFile)

  const inputString = fs.readFileSync(pathInput, 'utf-8')
  const inputArray = inputString.split('\n').map(x => {
    const [elf1, elf2] = x.split(',').map(y => {
      const [start, end] = y.split('-')
      return { start: +start, end: +end }
    })
    return { elf1, elf2 }
  })

  return inputArray
}

export function readFileDay5(pathFile: string): Operation[] {
  const pathInput = path.resolve(pathFile)

  const inputString = fs.readFileSync(pathInput, 'utf-8')
  const inputArray = inputString.split('\n').map(x => {
    const [quantity, from, to] = x
      .split(' ')
      .map(y => +y)
      .filter(z => z > 0)

    return { quantity, from, to }
  })

  return inputArray
}

export function readFileToString(pathFile: string): string {
  const pathInput = path.resolve(pathFile)
  return fs.readFileSync(pathInput, 'utf-8')
}

export const sum = (acc: number, item: number): number => acc + item

export const chunkedArray = <T>(array: Array<T>, size: number) => {
  let chunckedArray = []

  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size)
    chunckedArray.push(chunk)
  }

  return chunckedArray
}
