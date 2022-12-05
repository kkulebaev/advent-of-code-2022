const ResultGame = {
  lose: 'lose',
  draw: 'draw',
  win: 'win',
}

const ResultScore = {
  lose: 0,
  draw: 3,
  win: 6,
}

const RockPaperScissors = {
  Rock: 'Rock',
  Paper: 'Paper',
  Scissors: 'Scissors',
}

const RockPaperScissorsNum = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
}

const opponentShape = {
  A: RockPaperScissors.Rock,
  B: RockPaperScissors.Paper,
  C: RockPaperScissors.Scissors,
}

const yourShape = {
  X: RockPaperScissors.Rock,
  Y: RockPaperScissors.Paper,
  Z: RockPaperScissors.Scissors,
}

const yourShape2 = {
  X: ResultGame.lose,
  Y: ResultGame.draw,
  Z: ResultGame.win,
}

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

  if (oppShape === RockPaperScissors.Rock) {
    if (yourShape === RockPaperScissors.Paper) {
      return ResultScore.win + yourShapeScore
    }

    if (yourShape === RockPaperScissors.Scissors) {
      return ResultScore.lose + yourShapeScore
    }
  }

  if (oppShape === RockPaperScissors.Paper) {
    if (yourShape === RockPaperScissors.Scissors) {
      return ResultScore.win + yourShapeScore
    }

    if (yourShape === RockPaperScissors.Rock) {
      return ResultScore.lose + yourShapeScore
    }
  }

  if (oppShape === RockPaperScissors.Scissors) {
    if (yourShape === RockPaperScissors.Rock) {
      return ResultScore.win + yourShapeScore
    }

    if (yourShape === RockPaperScissors.Paper) {
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
    const oppShape = opponentShape[el[0]] //?
    const youShape = yourShape2[el[1]]

    const score = getScoreOfGame2(oppShape, youShape)
    totalScore += score
  })

  return totalScore
}

function getScoreOfGame2(oppShape, result) {
  if (result === ResultGame.draw) return ResultScore.draw + RockPaperScissorsNum[oppShape]

  if (result === ResultGame.win) {
    switch (oppShape) {
      case RockPaperScissors.Rock:
        return ResultScore.win + RockPaperScissorsNum.Paper
      case RockPaperScissors.Paper:
        return ResultScore.win + RockPaperScissorsNum.Scissors
      case RockPaperScissors.Scissors:
        return ResultScore.win + RockPaperScissorsNum.Rock
    }
  }

  if (result === ResultGame.lose) {
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
