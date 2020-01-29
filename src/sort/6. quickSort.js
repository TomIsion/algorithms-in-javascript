const { swap } = require('../utils/array')

function quickSort(arr) {
  const result = [
    ...arr
  ]

  /**
   * 对 [startIndex, endIndex] 区间范围内做快速排序的拆分
   * @param {num[]} arr 数字数组
   * @param {num} startIndex 开始位置
   * @param {num} endIndex 结束位置
   */
  function partQuick(arr, startIndex, endIndex) {
    if (endIndex - startIndex < 1) { // 单个值的情况
      return
    }

    if (endIndex - startIndex === 1) { // 两个值的情况
      if (arr[startIndex] > arr[endIndex]) {
        swap(arr, startIndex, endIndex)
      }

      return
    }

    const idIndex = startIndex + Math.floor(
      Math.random() * (endIndex - startIndex)
    )
    swap(startIndex, idIndex)

    const idValue = arr[startIndex]

    let lessEndIndex = startIndex
    let equalEndIndex = startIndex
    let greatStartIndex = endIndex

    /**
     * 结合上面的 lessEndIndex, equalEndIndex, greatStartIndex 三个字段
     * 当前的整个数据列 经过遍历 是要拆分成如下的模块
     * 
     * [
     *    IdValue, // 基准值 随机获取的
     *    [startIndex + 1, lessEndIndex], // 比基准值小的数组
     *    [lessEndIndex + 1, equalEndIndex], // 等于基准值的数组
     *    [greatStartIndex + 1, endIndex] // 比基准值大的数组
     * ]
     */

    let index = startIndex + 1

    while (true) {
      const current = arr[index]

      if (current === idValue) {
        equalEndIndex++
        index++
      }

      if (current < idValue) {
        swap(arr, lessEndIndex + 1, index)
        equalEndIndex++
        lessEndIndex++
        index++
      }

      if (current > idValue) {
        swap(arr, index, greatStartIndex)
        greatStartIndex--
      }

      if (greatStartIndex === equalEndIndex) break
    }

    // 最后将 0 & lessEndIndex - 1 交换
    swap(arr, startIndex, lessEndIndex)
    lessEndIndex--

    partQuick(arr, startIndex, lessEndIndex)
    partQuick(arr, greatStartIndex + 1, endIndex)
  }

  partQuick(result, 0, result.length - 1)

  return result
}

module.exports = quickSort
