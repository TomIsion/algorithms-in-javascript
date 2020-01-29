function createRandomArray(length = 10000, min = 0, max = 10000) {
  const arr = []

  for (let i = 0; i < length; i++) {
    arr.push(
      Math.floor(
        Math.random() * (max - min) + min
      )
    )
  }

  return arr
}

function swap(arr, leftIndex, rightIndex) {
  if (leftIndex === rightIndex) return

  const temp = arr[leftIndex]
  arr[leftIndex] = arr[rightIndex]
  arr[rightIndex] = temp
}

function isSortedArary(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) {
      continue
    } else {
      return false
    }
  }

  return true
}

module.exports = {
  createRandomArray,
  swap,
  isSortedArary,
}
