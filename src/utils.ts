import fs from 'fs'
import path from 'path'
import os from 'os'

import type { AllElvesCarryingCalories } from './day1/constants'
import type { ShapePairs } from './day2/constants'
import type { PairElf } from './day4/constants'
import type { Operation } from './day5/constants'
import type { TreePlace } from './day8/constants'

export function readFileDay1(pathFile: string): AllElvesCarryingCalories {
  const inputString = readFileToString(pathFile)

  const inputArray = inputString
    .split(os.EOL + os.EOL)
    .map(data => data.split(os.EOL).map(x => +x))

  return inputArray
}

export function readFileDay2(pathFile: string): ShapePairs[] {
  const inputString = readFileToString(pathFile)
  const inputByNewLine = splitByNewLine(inputString)

  return inputByNewLine.map(data => data.split(' ')) as ShapePairs[]
}

export function readFileSplitedByLine(pathFile: string): string[] {
  return splitByNewLine(readFileToString(pathFile))
}

export function readFileDay4(pathFile: string): PairElf[] {
  const inputString = readFileToString(pathFile)
  const inputByNewLine = splitByNewLine(inputString)

  const inputArray = inputByNewLine.map(x => {
    const [elf1, elf2] = x.split(',').map(y => {
      const [start, end] = y.split('-')
      return { start: +start, end: +end }
    })
    return { elf1, elf2 }
  })

  return inputArray
}

export function readFileDay5(pathFile: string): Operation[] {
  const inputString = readFileToString(pathFile)
  const inputByNewLine = splitByNewLine(inputString)

  const inputArray = inputByNewLine.map(x => {
    const [quantity, from, to] = x
      .split(' ')
      .map(y => +y)
      .filter(z => z > 0)

    return { quantity, from, to }
  })

  return inputArray
}

export function readFileDay8(pathFile: string): TreePlace {
  const inputString = readFileToString(pathFile)
  const inputByNewLine = splitByNewLine(inputString)

  const inputArray = inputByNewLine.map(x => x.split('').map(y => +y))

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

function splitByNewLine(str: string): string[] {
  return str.split('\n')
}
