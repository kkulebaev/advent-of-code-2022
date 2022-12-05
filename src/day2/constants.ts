export type Score = number

export enum ResultGame {
  lose = 'lose',
  draw = 'draw',
  win = 'win',
}

export enum ResultScore {
  lose = 0,
  draw = 3,
  win = 6,
}

export enum RockPaperScissors {
  Rock = 'Rock',
  Paper = 'Paper',
  Scissors = 'Scissors',
}

export enum RockPaperScissorsNum {
  Rock = 1,
  Paper = 2,
  Scissors = 3,
}

export const EncryptedOpponentShape = {
  A: RockPaperScissors.Rock,
  B: RockPaperScissors.Paper,
  C: RockPaperScissors.Scissors,
} as const

export const EncryptedYourShape = {
  X: RockPaperScissors.Rock,
  Y: RockPaperScissors.Paper,
  Z: RockPaperScissors.Scissors,
} as const

export const EncryptedResultGame = {
  X: ResultGame.lose,
  Y: ResultGame.draw,
  Z: ResultGame.win,
} as const

type OpponentShapeKeys = keyof typeof EncryptedOpponentShape
type YourShapeKeys = keyof typeof EncryptedYourShape
export type ShapePairs = [OpponentShapeKeys, YourShapeKeys]
