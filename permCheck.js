/*
src: https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/

A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:
    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2

is a permutation, but array A such that:
    A[0] = 4
    A[1] = 1
    A[2] = 3

is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

    function solution(A);

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.
*/

function permCheck (arr) {
  let sumCheck = 0
  const hashCheckUnique = {}
  for(let i = 0; i < arr.length; i++) {
    if(hashCheckUnique[arr[i]]) {
      return 0
    }
    sumCheck += i + 1 - arr[i]
    hashCheckUnique[arr[i]] = true
  }
  return sumCheck === 0 ? 1 : 0
}

module.exports = permCheck
