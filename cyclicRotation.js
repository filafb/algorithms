/*
source: https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
Rotate an array to the right by a given number of steps.

n array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

Write a function:

    function solution(A, K);

that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.
*/
//time: O(1) // Space O(1)
function cyclicRotation(arr, k) {
  // normalize rotations that is bigger than the array size
  const rotations = k % arr.length
  // Get the new tail, from index zero up to the array size - rotations
  const tail = arr.slice(0, arr.length - rotations)
  // get the new head, from array size - rotations to the end
  const head = arr.slice(arr.length - rotations)
  //contact new head and tail
  return [...head, ...tail]
}

module.exports = cyclicRotation
