const { createRandomArray, isSortedArary } = require('../../src/utils/array')

// 排序方法体的 mapping
const objSortFuncMappings = {
  select: require('../../src/sort/1. selectSort'),
  insert: require('../../src/sort/2. insertSort'),
  bubble: require('../../src/sort/3. bubbleSort'),
  shell: require('../../src/sort/4. shellSort'),
  merge: require('../../src/sort/5. mergeSort').mergeSort,
  mergeUD: require('../../src/sort/5. mergeSort').mergeSortUD,
}

// 排序方法名称的 mapping
const objSortFuncNameMappings = {
  select: '选择排序',
  insert: '插入排序',
  bubble: '冒泡排序',
  shell: '希尔排序',
  merge: '归并排序',
  mergeUD: '自顶向下的归并排序',
  quick: '快速排序',
}

const { exampleArrayLength: defaultArrLength } = require('./constant')

/**
 * 获取命令行传递的参数，支持的键值对如下：
 * 
 * arrLength=number
 * sortNames=select[,insert,bubble]
 */
const arrArgv = process.argv.slice(2)
const objArgv = arrArgv.reduce((pre, cur) => {
  const arrCur = cur.split('=')
  const key = arrCur[0]
  const value = arrCur.slice(1).join('=')

  if (key === 'arrLength') {
    if (!Number.isNaN(Number(value))) {
      pre.arrLength = value
    }

    return pre
  }

  if (key === 'sortNames') {
    pre.sortNames = value.split(',')
    return pre
  }

  return pre
}, {
  arrLength: defaultArrLength,
  sortNames: ['select']
})

const {
  arrLength,
  sortNames,
} = objArgv

const arrRandom = createRandomArray(arrLength)

for (let i = 0; i < sortNames.length; i++) {
  const currentSortKey = sortNames[i]

  const currentSortFunc = objSortFuncMappings[currentSortKey]
  const currentSortName = objSortFuncNameMappings[currentSortKey]

  const startTimestamp = Date.now()
  const arrSorted = currentSortFunc(arrRandom)
  const timeConsumed = Date.now() - startTimestamp

  console.log(
    isSortedArary(arrSorted) ? `${currentSortName}成功` : `${currentSortName}失败`
  )

  console.log(`${currentSortName}：${arrLength}个元素，耗时：${timeConsumed}ms \n`)
}
