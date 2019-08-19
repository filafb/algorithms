
const countBattleships = require('./countBattleships')

const x = 'X'
const e = '.'

let board = [[x, e, e,x ], [e,x,e,x], [e,e,e,x]]
let board1 = [[x, x, x,x ]]
let board2 = [[x], [x], [e],[x] ]
let board3 = [[x, e, e,x ], [e,e,e,x], [e,e,e,x]]


describe('Count Battleships', () => {
  it('counts how many ship are in a 2D board, considering there is no ship adjacent to each other and they are placed horizontally or vertically', () => {
    expect(countBattleships(board)).toBe(3)
    expect(countBattleships(board1)).toBe(1)
    expect(countBattleships(board2)).toBe(2)
    expect(countBattleships(board3)).toBe(2)

  })
} )

