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

};

/**
 *
 * @param {string[][]} board
 * @param {number} column
 * @param {number} n
 * @return {false || board}
 */
//the problem ask for all solutions. Will have to change the base case and the return statement
function solver(board, column, n) {
  //base case
  if(column === n) {
    //this mean we reached the last column after validating all others as safe position for a Queen.
    return true
  }
  // for each row, we will try to position the Queen in n posible positions
  for(let row = 0; row < n; row++) {
    //before positioning a Queen at column and row, we check if it's valid.
    if(checkSafety(row, column, board)) {
      //if the position is safe, we place queen there, and move to check the next column, using the new board as starting point
      board[row][column] = 'Q';
      let explore = solver(board, ++column, n)
      //if we reach column === n (base case), function will return true
      if(explore) {
        console.log(explore) //should be true first time, then the board
        // and then we can return the board to the main caller
        return board
      }
      //if a function exit in the checkSafety and complete the for loop, we remove the Queen and keep the loop of the next row.
      board[row][column] = '.'
    }
    //if the position is not valid, we loop to the next row
  }
  return false
}
/**
 *
 * @param {number} row
 * @param {number} column
 * @param {string[][]} board
 * @return {boolean}
 */
function checkSafety(row, column, board) {
  //check if we can place a queen in this position
}

//Callstack representation
                                                                            //solver(board,3,4) -> fail: 3x0,3x1,3x2,3x3 exit
        //solver(board,2,4) -> fail: 2x0,2x1,2x2, 2x3 exit function       solver(board,2,4) -> fail: 2x0 -> sucess: 2x1      solver(board,2,4) -> fail: 2x2,2x3 exit
    //solver(board,1,4) -> fail: 1x0,1x1  -> success: 1x2              solver(board,1,4) -> sucess: 1x3                            solver(board,1,4) exit
//solver(board, 0,4) sucess: 0x0                                                                                                          solver(board,0,4)


              //solver(board,4,4) -> return true
          //solver(board, 3, 4) -> fail: 3x0, 3x1 sucess 3x2  -> return board
        //solver(board, 2,4) -> sucess: 2x0                     -> return board
    //solver(board, 1, 4) -> fails: 1x0, 1x1, 1x2 sucess 1x3      -> return board
//solver(board,0,4) sucess: 0x1                                     -> return board




module.exports = solveNQueens
