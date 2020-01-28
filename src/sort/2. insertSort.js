const { swap } = require('../utils/array')

function insertSort(arr) {
  const result = [
    ...arr
  ]

  for (let i = 1; i < result.length; i++) {
    for (let j = i; j > 0; j--) {
      const k = j - 1

      const current = result[j]
      const pointer = result[k]

      if (current < pointer) { // 交换两个位置上的值
        swap(result, j, k)
      } else {
        /**
         * 这里对循环做了节流
         * 当被插入的元素到了合适的位置时 结束接下来的遍历比较流程
         */
        break
      }
    }
  }

  return result
}

module.exports = insertSort
