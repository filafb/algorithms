/*
source: https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/

Count minimal number of jumps from position X to Y.

A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

Count the minimal number of jumps that the small frog must perform to reach its target.

Write a function:

    function solution(X, Y, D);

that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.
*/

function frogJmp(x, y, d) {
  return Math.ceil((y-x) / d)
}

module.exports = frogJmp
