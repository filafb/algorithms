/*
src: https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.
*/


function missingElement(arr) {
  let arraySum = 0
  let indexSum = arr.length + 1
  let maxNumber = 0
  for(let i = 0; i < arr.length; i++){
    arraySum += arr[i]
    indexSum += i+1
    if(arr[i] > maxNumber) {
      maxNumber = arr[i]
    }
  }

  return indexSum - arraySum
}

module.exports = missingElement

