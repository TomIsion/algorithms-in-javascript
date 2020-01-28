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
    for (let j = i + 1; j < result.length; j++) {
      const current = result[i]
      const pointer = result[j]

      if (pointer < current) { // 交换两个位置上的值
        swap(result, i, j)
      }
    }
  }

  return result
}

module.exports = bubbleSort
