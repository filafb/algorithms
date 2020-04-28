/* source: https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/

Write a function:

    function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..100,000];
        each element of array A is an integer within the range [−1,000,000..1,000,000].

*/

function missingInteger (arr) {
  //1. anchor - value to return, min value
  let anchor = 1
  //2. a map to hold visited values
  const map = {}
  //3. loop all elements array
  for (let i = 0 ; i < arr.length; i++) {
    // update map with a visited value
    map[arr[i]] = true
    // if the current value is equal anchor, we need to update anchor up to the next integer up to the smallest non visited integer
    if(arr[i] === anchor) {
      while(map[anchor]) {
        anchor++
      }
    }
  }
  return anchor
}

module.exports = missingInteger
