/*
  easy way to calculate prefixSum O(n)
*/

function prefixSum(a) {
  let arr = [0]
  let currSum = 0
  for(let i = 0; i < a.length; i++) {
    arr[i + 1] = currSum += a[i]
  }
  return arr
}

//prefixSum([3,2,4,1]) -> [0,3,5,9,10]

/* To get a slice O(1)*/

function sliceSum(prefixArr, x, y) {
  console.log(prefixArr)
  return prefixArr[x + 1] - prefixArr[y]
}

//sliceSum(prefixSum([3,2,4,1]), 2, 1)) -> (4+2) = 6
