const { swap } = require('../utils/array')

function mergeSort(arr) {
  const result = [
    ...arr
  ]

  // 内部递归函数
  function merge(arr) {
    if (arr.length === 1 || arr.length === 0) {
      return arr
    }

    const length = arr.length
    const midIndex = Math.floor(length / 2)

    const arrLeft = merge(arr.slice(0, midIndex))
    const arrRight = merge(arr.slice(midIndex))

    const leftLength = arrLeft.length
    const rightLength = arrRight.length

    /**
     * 优化：
     * 此时需要归并的两个数组如果都已经是有序的
     * 那这边就不需要再对这两个数组进行整体的排序了
     */
    if (arrLeft[leftLength - 1] <= arrRight[0]) {
      return [
        ...arrLeft,
        ...arrRight,
      ]
    }

    const res = []

    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < leftLength || rightIndex < rightLength) {
      const leftItem = arrLeft[leftIndex]
      const rightItem = arrRight[rightIndex]

      if (rightItem === undefined || leftItem < rightItem) {
        leftIndex++
        res.push(leftItem)
      } else {
        rightIndex++
        res.push(rightItem)
      }
    }

    return res
  }

  return merge(result)
}

/**
 * 自顶向下的归并排序
 * @param {arr} arr 数字数组
 */
function mergeSortUD(arr) {
  const result = [
    ...arr
  ]

  /**
   * 直接在原数组上进行排序的内部递归函数
   * @param {arr} arr 数字数组
   * @param {num} beginIndex 拆分局部数据的长度
   * @param {num} endIndex 拆分局部数据的长度
   * @param {num} step 拆分局部数据的长度
   */
  function mergeOriginArr(arr, beginIndex, endIndex, step) {
    if (arr.length === 1 || arr.length === 0) {
      return
    }

    const arrLeft = arr.slice(beginIndex, beginIndex + step)
    const arrRight = arr.slice(beginIndex + step, endIndex)

    const leftLength = arrLeft.length
    const rightLength = arrRight.length

    /**
     * 优化：
     * 此时需要归并的两个数组如果都已经是有序的
     * 那这边就不需要再对这两个数组进行整体的排序了
     */
    if (leftLength === 0 || rightLength === 0 || arrLeft[leftLength - 1] <= arrRight[0]) {
      return
    }

    let leftIndex = 0
    let rightIndex = 0

    let index = 0

    while (leftIndex < leftLength || rightIndex < rightLength) {
      const leftItem = arrLeft[leftIndex]
      const rightItem = arrRight[rightIndex]

      const currentIndex = beginIndex + index

      if (rightItem === undefined || leftItem < rightItem) {
        leftIndex++
        arr[currentIndex] = leftItem
      } else {
        rightIndex++
        arr[currentIndex] = rightItem
      }

      index++
    }
  }

  const length = result.length

  for (let step = 1; step < length; step = step * 2) {
    const pairLength = step * 2
    const pairCount = length % pairLength === 0 ? length / pairLength : (Math.floor(length / pairLength) + 1)

    for (let i = 0; i < pairCount; i++) {
      const beginIndex = pairLength * i
      const endIndex = Math.min(beginIndex + pairLength, length)

      mergeOriginArr(result, beginIndex, endIndex, step)
    }
  }

  return result
}

module.exports = {
  mergeSort,
  mergeSortUD,
}
