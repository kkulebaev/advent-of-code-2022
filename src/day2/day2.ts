import {
  ResultScore,
  RockPaperScissors,
  RockPaperScissorsNum,
  OpponentShape,
  YourShape,
  YourShape2,
  ResultGame,
  type ShapePairs,
} from './constants'

/*
  ============== part1 ==============
*/

export function totalScoreOfStrategyGuide(data: ShapePairs[]): number {
  let totalScore = 0

  data.forEach(el => {
    const shape1 = el[0]
    const shape2 = el[1]

    const oppShape = OpponentShape[shape1]
    const yourShape = YourShape[shape2]

    const score = getScoreOfGame(oppShape, yourShape)
    totalScore += score
  })

  return totalScore
}

function getScoreOfGame(
  oppShape: RockPaperScissors,
  yourShape: RockPaperScissors
): number {
  const yourShapeScore = RockPaperScissorsNum[yourShape]

  if (oppShape === yourShape) return ResultScore.draw + yourShapeScore

  switch (oppShape) {
    case RockPaperScissors.Rock:
      switch (yourShape) {
        case RockPaperScissors.Paper:
          return ResultScore.win + yourShapeScore
        case RockPaperScissors.Scissors:
          return ResultScore.lose + yourShapeScore
      }

    case RockPaperScissors.Paper:
      switch (yourShape) {
        case RockPaperScissors.Scissors:
          return ResultScore.win + yourShapeScore
        case RockPaperScissors.Rock:
          return ResultScore.lose + yourShapeScore
      }

    case RockPaperScissors.Scissors:
      switch (yourShape) {
        case RockPaperScissors.Rock:
          return ResultScore.win + yourShapeScore
        case RockPaperScissors.Paper:
          return ResultScore.lose + yourShapeScore
      }

    default:
      throw Error('Unknown values')
  }
}

/*
  ============== part2 ==============
*/

export function totalScoreOfStrategyGuide2(data: ShapePairs[]) {
  let totalScore = 0

  data.forEach(el => {
    const shape1 = el[0]
    const shape2 = el[1]

    const oppShape = OpponentShape[shape1]
    const yourShape = YourShape2[shape2]

    const score = getScoreOfGame2(oppShape, yourShape)
    totalScore += score
  })

  return totalScore
}

function getScoreOfGame2(
  oppShape: RockPaperScissors,
  result: ResultGame
): number {
  switch (result) {
    case ResultGame.draw:
      return ResultScore.draw + RockPaperScissorsNum[oppShape]

    case ResultGame.win:
      switch (oppShape) {
        case RockPaperScissors.Rock:
          return ResultScore.win + RockPaperScissorsNum.Paper
        case RockPaperScissors.Paper:
          return ResultScore.win + RockPaperScissorsNum.Scissors
        case RockPaperScissors.Scissors:
          return ResultScore.win + RockPaperScissorsNum.Rock
      }

    case ResultGame.lose:
      switch (oppShape) {
        case RockPaperScissors.Rock:
          return ResultScore.lose + RockPaperScissorsNum.Scissors
        case RockPaperScissors.Paper:
          return ResultScore.lose + RockPaperScissorsNum.Rock
        case RockPaperScissors.Scissors:
          return ResultScore.lose + RockPaperScissorsNum.Paper
      }

    default:
      throw Error('Unknown values')
  }
}
