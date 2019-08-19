/* eslint-disable complexity */
//source: https://leetcode.com/problems/battleships-in-a-board/

// Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:

//You receive a valid board, made of only battleships or empty slots.
//Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
//At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.

/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let counter = 0;
    for(let c = 0; c < board[0].length; c++) {
      for(let r = 0; r < board.length; r++) {
        if(board[r][c] === 'X') {
          if(r -1 === -1 && c - 1 === -1) counter++
          else if(r - 1 === -1) {
            if(board[r][c - 1] === '.') counter++
            else continue
          }
          else if( c - 1 === - 1) {
            if(board[r - 1][c] === '.') counter++
            else continue
          }
          else if(board[r-1][c] === '.' && board[r][c-1] === '.') counter++
        }
      }
    }
    return counter
};

module.exports = countBattleships
