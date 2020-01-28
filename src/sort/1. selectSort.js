const { swap } = require('../utils/array')

function selectSort(arr) {
  const result = [
    ...arr
  ]

  for (let i = 0; i < result.length; i++) {
    let minIndex = i

    for (let j = i + 1; j < result.length; j++) { // 在这次循环中找到
      const current = result[minIndex]
      const pointer = result[j]

      if (pointer < current) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      swap(result, i, minIndex)
    }
  }

  return result
}

module.exports = selectSort
