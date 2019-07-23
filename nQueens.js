//source: https://leetcode.com/problems/n-queens/

// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
// Given an integer n, return all distinct solutions to the n-queens puzzle.

//Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

//video explanation : https://www.youtube.com/watch?v=wGbuCyNpxIg
//video explanation : https://www.youtube.com/watch?time_continue=65&v=5v6zdfkImms

/**
 * Approach:
 *  1. Choose
 *  2. Explore
 *  3. Unchoose
 *
 * Recursive. Backtracking
 * Place a queen first row;
 * Place a queen second row in, a safe position. If it's valid solution, go to the next row, otherwise, try next valid position. When all positions are done and we cannot go ahead, go back one row and change the position.
 */



/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let board = createABoard(n)
  return solver(board, 0, n)

};
console.log(solveNQueens(4))

function createABoard(n) {
  let row = new Array(n).fill('.')
  let board = []
  for(let i = 0; i < n; i++) {
    board.push([...row])
  }
  return board
}


/**
 *
 * @param {string[][]} board
 * @param {number} column
 * @param {number} n
 * @return {false || board}
 */

function solver(board, column, n, results = [], positions = []) {
  //base case
  if(column === n) {
    //this mean we reached the last column after validating all others as safe position for a Queen.
    results.push([...board])
    return results
  }
  // for each row, we will try to position the Queen in n posible positions
  for(let row = 0; row < n; row++) {
    //before positioning a Queen at column and row, we check if it's valid.
    if(checkSafety(row, positions)) {
      positions.push(row)
      //if the position is safe, we place queen there, and move to check the next column, using the new board as starting point
      board[row][column] = 'Q';
      //we explore this scnerario. It always return a new result array. If reach n === column, the board is added to the results. If not, return the current one.
      results = solver(board, column+1, n, results, positions)
      //for all cases, we remove the Queen and explore new alternatives
      positions.pop()
      board[row][column] = '.'
    }
    //if the position is not valid, we loop to the next row
  }
  return results
}
/**
 *
 * @param {number} row
 * @param {string[]} positions
 * @return {boolean}
 */
function checkSafety(row, positions) {
  const column = positions.length
  for(let i = 0; i < column; i++) {
    if(row === positions[i]) return false
    let place = column - i
    if(row === positions[i] + place || row === positions[i] - place) return false
  }
  return true
}
console.log(checkSafety(2, [1,3,0]))



module.exports = solveNQueens
