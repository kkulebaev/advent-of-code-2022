import {
  ResultGame,
  ResultScore,
  RockPaperScissors,
  RockPaperScissorsNum,
  opponentShape,
  yourShape,
  yourShape2,
} from './constants.js'

/*
  ============== part1 ==============
*/

export function totalScoreOfStrategyGuide(data) {
  let totalScore = 0

  data.forEach(el => {
    const oppShape = opponentShape[el[0]]
    const youShape = yourShape[el[1]]

    const score = getScoreOfGame(oppShape, youShape)
    totalScore += score
  })

  return totalScore
}

function getScoreOfGame(oppShape, yourShape) {
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
  }
}

/*
  ============== part2 ==============
*/

export function totalScoreOfStrategyGuide2(data) {
  let totalScore = 0

  data.forEach(el => {
    const oppShape = opponentShape[el[0]]
    const youShape = yourShape2[el[1]]

    const score = getScoreOfGame2(oppShape, youShape)
    totalScore += score
  })

  return totalScore
}

function getScoreOfGame2(oppShape, result) {
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
  }
}
