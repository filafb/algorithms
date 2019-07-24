const solveNQueens = require('./nQueens')

describe('Solve N queens', () => {
  it('returns all possibilities to place N queens in a board of NxN, and each queen doesnt attack another one', () => {
    expect(solveNQueens(1)).toEqual([['Q']])
    expect(solveNQueens(2)).toEqual([])
    expect(solveNQueens(3)).toEqual([])
    expect(solveNQueens(4)).toHaveLength(2)
    expect(solveNQueens(4)).toEqual(expect.arrayContaining([['..Q.', 'Q...', '...Q', '.Q..'], ['.Q..', '...Q', 'Q...', '..Q.']]))
    expect(solveNQueens(5)).toHaveLength(10)
    expect(solveNQueens(5)).toEqual(expect.arrayContaining([ [ 'Q....', '...Q.', '.Q...', '....Q', '..Q..' ],[ 'Q....', '..Q..', '....Q', '.Q...', '...Q.' ],[ '..Q..', 'Q....', '...Q.', '.Q...', '....Q' ],[ '...Q.', 'Q....', '..Q..', '....Q', '.Q...' ],[ '.Q...', '...Q.', 'Q....', '..Q..', '....Q' ],[ '....Q', '..Q..', 'Q....', '...Q.', '.Q...' ],[ '.Q...', '....Q', '..Q..', 'Q....', '...Q.' ],[ '....Q', '.Q...', '...Q.', 'Q....', '..Q..' ],[ '...Q.', '.Q...', '....Q', '..Q..', 'Q....' ],[ '..Q..', '....Q', '.Q...', '...Q.', 'Q....' ] ]))
  })
})
