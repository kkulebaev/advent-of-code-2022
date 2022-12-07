import fs from 'fs'
import path from 'path'
import type { AllElvesCarryingCalories } from './day1/constants'
import type { ShapePairs } from './day2/constants'
import type { EncryptedString } from './day3/constants'

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

export const sum = (acc: number, item: number): number => acc + item
