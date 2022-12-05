import fs from 'fs'
import path from 'path'

export function readFile(pathFile) {
  const pathInput = path.resolve(pathFile)

  const inputString = fs.readFileSync(pathInput, 'utf-8')
  const inputArray = inputString.split('\n\n').map(data => data.split('\n').map(x => +x))

  return inputArray
}

export function readFileToString(pathFile) {
  const pathInput = path.resolve(pathFile)

  const inputString = fs.readFileSync(pathInput, 'utf-8')
  const inputArray = inputString.split('\n').map(data => data.split(' '))

  return inputArray
}

export const sum = (acc, item) => acc + item
