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

export const OpponentShape = {
  A: RockPaperScissors.Rock,
  B: RockPaperScissors.Paper,
  C: RockPaperScissors.Scissors,
} as const

export const YourShape = {
  X: RockPaperScissors.Rock,
  Y: RockPaperScissors.Paper,
  Z: RockPaperScissors.Scissors,
} as const

export const YourShape2 = {
  X: ResultGame.lose,
  Y: ResultGame.draw,
  Z: ResultGame.win,
} as const

type OpponentShapeKeys = keyof typeof OpponentShape
type YourShapeKeys = keyof typeof YourShape
export type ShapePairs = [OpponentShapeKeys, YourShapeKeys]
