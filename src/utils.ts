import fs from 'fs'
import path from 'path'
import { EncryptedString } from './day3/constants'

export function readFile(pathFile: string): number[][] {
  const pathInput = path.resolve(pathFile)

  const inputString = fs.readFileSync(pathInput, 'utf-8')
  const inputArray = inputString
    .split('\n\n')
    .map(data => data.split('\n').map(x => +x))

  return inputArray
}

export function readFileToString(pathFile: string): string[][] {
  const pathInput = path.resolve(pathFile)

  const inputString = fs.readFileSync(pathInput, 'utf-8')
  const inputArray = inputString.split('\n').map(data => data.split(' '))

  return inputArray
}

export function readDay3(pathFile: string): EncryptedString[] {
  const pathInput = path.resolve(pathFile)

  const inputString = fs.readFileSync(pathInput, 'utf-8')
  const inputArray = inputString.split('\n')

  return inputArray
}

export const sum = (acc: number, item: number): number => acc + item
