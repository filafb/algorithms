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

module.exports = solveNQueens
