import { TreePlace } from './constants'

export function getCountVisibleTrees(data: TreePlace) {
  let counter = 0

  for (let i = 0; i < data.length; i++) {
    const row = data[i]

    for (let j = 0; j < row.length; j++) {
      const height = row[j]

      if (i === 0 || i === data.length - 1) {
        counter++
        continue
      }

      if (j === 0 || j === row.length - 1) {
        counter++
        continue
      }

      const { isVisible: isTopVisible } = checkTopVisible(height, i, j, data)

      if (isTopVisible) {
        counter++
        continue
      }

      const { isVisible: isLeftVisible } = checkLeftVisible(height, i, j, data)

      if (isLeftVisible) {
        counter++
        continue
      }

      const { isVisible: isDownVisible } = checkDownVisible(height, i, j, data)

      if (isDownVisible) {
        counter++
        continue
      }

      const { isVisible: isRightVisible } = checkRightVisible(
        height,
        i,
        j,
        data
      )

      if (isRightVisible) {
        counter++
        continue
      }
    }
  }

  return counter
}

interface VisibleScore {
  isVisible: boolean
  score: number
}

function checkTopVisible(
  height: number,
  rowPos: number,
  colPos: number,
  treePlace: TreePlace
): VisibleScore {
  let score = 0
  let isVisible = true

  for (let i = rowPos - 1; i >= 0; i--) {
    score++

    if (height <= treePlace[i][colPos]) {
      return { isVisible: false, score }
    }
  }

  return { isVisible, score }
}

function checkLeftVisible(
  height: number,
  rowPos: number,
  colPos: number,
  treePlace: TreePlace
): VisibleScore {
  let score = 0
  let isVisible = true

  for (let i = colPos - 1; i >= 0; i--) {
    score++

    if (height <= treePlace[rowPos][i]) {
      return { isVisible: false, score }
    }
  }

  return { isVisible, score }
}

function checkDownVisible(
  height: number,
  rowPos: number,
  colPos: number,
  treePlace: TreePlace
): VisibleScore {
  let score = 0
  let isVisible = true

  const colCount = treePlace.length

  for (let i = rowPos + 1; i < colCount; i++) {
    score++

    if (height <= treePlace[i][colPos]) {
      return { isVisible: false, score }
    }
  }

  return { isVisible, score }
}

function checkRightVisible(
  height: number,
  rowPos: number,
  colPos: number,
  treePlace: TreePlace
): VisibleScore {
  let score = 0
  let isVisible = true

  const rowCount = treePlace[0].length

  for (let i = colPos + 1; i < rowCount; i++) {
    score++

    if (height <= treePlace[rowPos][i]) {
      return { isVisible: false, score }
    }
  }

  return { isVisible, score }
}

export function getHighestScenicScore(data: TreePlace): number {
  let highestScore = 0

  for (let i = 0; i < data.length; i++) {
    const row = data[i]

    for (let j = 0; j < row.length; j++) {
      const height = row[j]

      const { score: topScore } = checkTopVisible(height, i, j, data)
      if (topScore === 0) continue

      const { score: leftScore } = checkLeftVisible(height, i, j, data)
      if (leftScore === 0) continue

      const { score: downScore } = checkDownVisible(height, i, j, data)
      if (downScore === 0) continue

      const { score: rightScore } = checkRightVisible(height, i, j, data)
      if (rightScore === 0) continue

      const scoreResult = topScore * leftScore * downScore * rightScore

      if (scoreResult > highestScore) {
        highestScore = scoreResult
      }
    }
  }

  return highestScore
}
