const { swap } = require('../utils/array')

/**
 * 本质上冒泡排序就是没有经过优化的选择排序
 * 选择排序减少了交互元素的次数 以此来优化时间
 * 
 * @param {arr} arr 数字数组
 */
function bubbleSort(arr) {
  const result = [
    ...arr
  ]

  for (let i = 0; i < result.length; i++) {
    let swaped = false // 如果在下面一次循环中 不做任何位置交换 说明剩下的数据本身就是有序的 可以直接跳出冒泡排序

    for (let j = 0; j + 1 < result.length - i; j++) {
      const current = result[j]
      const next = result[j + 1]

      if (current > next) { // 交换两个位置上的值
        swaped = true
        swap(result, j, j + 1)
      }
    }

    if (!swaped) {
      return result
    }
  }

  return result
}

module.exports = bubbleSort
