import { describe, expect, it } from 'vitest'
import { detectStartOfPacketMarker } from './day6'
import { readFileToString } from '../utils'

const inputPath = 'src/day6/input.txt'

const data = readFileToString(inputPath)

describe('Day 6 (puzzle)', () => {
  it('part 1 should have answer', () => {
    const result = detectStartOfPacketMarker(data)
    expect(result).toEqual(1566)
  })

  it.todo('part 2 should have answer', () => {
    const result = detectStartOfPacketMarker(data)
    expect(result).toEqual('FGLQJCMBD')
  })
})
