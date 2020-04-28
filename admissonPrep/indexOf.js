/*
  find the index of B in A.
  brute force: loop both strings
*/

function indexOf(str, queryStr) {
  let left = 0
  while (left < str.length) {
    let leftQuery = 0
    if (str[left] !== queryStr[leftQuery]) {
      left++
    } else {
      while (str[left] === queryStr[leftQuery]) {
        console.log(left, queryStr.length)
        if (leftQuery === queryStr.length - 1) {
          return left - (queryStr.length - 1)
        }
        leftQuery++
        left++
      }
    }
  }
  return -1
}
