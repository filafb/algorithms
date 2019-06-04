//source: https://leetcode.com/problems/robot-return-to-origin/
//There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

//The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.
//time O(n)
// space O(1)

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let v = 0;
  let h = 0;
  for(let i = 0; i < moves.length; i++) {
      if (moves[i] === 'U'){
          v++
      } else if(moves[i] === 'D') {
          v--
      } else if (moves[i] === 'R') {
          h++
      } else if (moves[i] === 'L') {
          h--
      }
  }
  return v === 0 && h === 0
};

module.exports =  judgeCircle
