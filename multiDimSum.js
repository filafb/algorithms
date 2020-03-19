/*
  write a function that can sum all the numbers in a multi-dimensional array of numbers
*/

function multiDimSumArrayRecursive(arr) {

  let sum = 0

  for(let i = 0; i <arr.length; i++) {
    if(Array.isArray(arr[i])) {
      sum += multiDimSumArrayRecursive(arr[i])
    } else {
      sum += arr[i]
    }
  }

  return sum
}


function multiDimSumArray(arr) {
  let arrCopy = [...arr]
  let stack = [arrCopy.shift()]
  let sum = 0
  while(stack.length) {
    let element = stack.shift()
    if(Array.isArray(element)) {
        stack = [...element, ...stack]
    } else {
      sum += element
    }
    if(!stack.length && arrCopy.length) {
      let nextElement = arrCopy.shift()
      stack.push(nextElement)
    }
  }
  return sum
}

module.exports = {multiDimSumArray, multiDimSumArrayRecursive}
