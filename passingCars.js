/*
src: https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

Array A contains only 0s and/or 1s:

        0 represents a car traveling east,
        1 represents a car traveling west.

The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

For example, consider array A such that:
  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1

We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

Write a function:

    function solution(A);

that, given a non-empty array A of N integers, returns the number of pairs of passing cars.

The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.
*/

function passingCars(arr) {
  let totalPairs = 0
  let travelingWest = 0
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]) {
      totalPairs += travelingWest
      if(totalPairs > 1000000000) return -1
    } else {
      travelingWest++
    }
  }
  return totalPairs
}

module.exports = passingCars
