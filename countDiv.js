/*
src: https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/

Write a function:

    function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

    { i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.
*/

function countDiv(a,b,k) {
  // let counter = 0
  // for(let i = a; i <= b; i++) {
  //   if(i % k === 0) {
  //     counter++
  //   }
  // }
  // return counter
  let left = k < a || a === 0 ? a : k

  while(left % k) {
    if(left === b ) return 0
    left++
  }

  let size = b - left
  let fits = Math.floor(size / k)
  return fits + 1
}

module.exports = countDiv
