/*
src: https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
*/

function tapeEquilibrium (arr) {
  let leftSum = arr[0]
  let rightSum = 0
  for(let i = 1; i < arr.length; i++) {
    rightSum += arr[i]
  }
  //3
  let diff = Math.abs(leftSum - rightSum)
  for(let i = 2; i < arr.length; i++) {
    leftSum += arr[i-1]
    rightSum -= arr[i-1]
    let newDiff = Math.abs(leftSum - rightSum)
    if(newDiff < diff) {
      diff = newDiff
    }
  }
  return diff
}

module.exports = tapeEquilibrium
