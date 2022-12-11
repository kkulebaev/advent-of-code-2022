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

      console.log(height)

      if (checkTopVisible(height, i, j, data)) {
        counter++
        continue
      }

      console.log(height)

      if (checkLeftVisible(height, i, j, data)) {
        counter++
        continue
      }

      console.log(height)

      if (checkDownVisible(height, i, j, data)) {
        counter++
        continue
      }

      console.log(height)

      if (checkRightVisible(height, i, j, data)) {
        counter++
        continue
      }

      console.log(height)
    }
  }

  return counter
}

function checkTopVisible(
  height: number,
  rowPos: number,
  colPos: number,
  treePlace: TreePlace
): boolean {
  let isVisible = true

  for (let i = rowPos - 1; i >= 0; i--) {
    if (height <= treePlace[i][colPos]) {
      return false
    }
  }

  return isVisible
}

function checkLeftVisible(
  height: number,
  rowPos: number,
  colPos: number,
  treePlace: TreePlace
): boolean {
  let isVisible = true

  for (let i = colPos - 1; i >= 0; i--) {
    if (height <= treePlace[rowPos][i]) {
      return false
    }
  }

  return isVisible
}

function checkDownVisible(
  height: number,
  rowPos: number,
  colPos: number,
  treePlace: TreePlace
): boolean {
  let isVisible = true

  const colCount = treePlace.length

  for (let i = rowPos + 1; i < colCount; i++) {
    if (height <= treePlace[i][colPos]) {
      return false
    }
  }

  return isVisible
}

function checkRightVisible(
  height: number,
  rowPos: number,
  colPos: number,
  treePlace: TreePlace
): boolean {
  let isVisible = true

  const rowCount = treePlace[0].length

  for (let i = colPos + 1; i < rowCount; i++) {
    if (height <= treePlace[rowPos][i]) {
      return false
    }
  }

  return isVisible
}
