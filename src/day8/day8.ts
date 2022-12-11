import { TreePlace, VisibleScore } from './constants'

export function getCountVisibleTrees(data: TreePlace) {
  let counter = 0

  for (let i = 0; i < data.length; i++) {
    const row = data[i]

    for (let j = 0; j < row.length; j++) {
      const height = row[j]

      const outsideEl =
        i === 0 || i === data.length - 1 || j === 0 || j === row.length - 1

      if (outsideEl) {
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

function checkTopVisible(
  height: number,
  rowPos: number,
  colPos: number,
  treePlace: TreePlace
): VisibleScore {
  let score = 0
  let isVisible = true
  let i = rowPos - 1

  while (i >= 0) {
    score++

    if (height <= treePlace[i][colPos]) {
      return { isVisible: false, score }
    }

    i--
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
  let i = colPos - 1

  while (i >= 0) {
    score++

    if (height <= treePlace[rowPos][i]) {
      return { isVisible: false, score }
    }

    i--
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
  let i = rowPos + 1
  const colCount = treePlace.length

  while (i < colCount) {
    score++

    if (height <= treePlace[i][colPos]) {
      return { isVisible: false, score }
    }

    i++
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
  let i = colPos + 1
  const rowCount = treePlace[0].length

  while (i < rowCount) {
    score++

    if (height <= treePlace[rowPos][i]) {
      return { isVisible: false, score }
    }

    i++
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
