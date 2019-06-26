const searchMatrix = require('./searchMatrix');

let matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]

describe('search Matrix', () => {
  it('search for a target value in a 2D array', () => {
    expect(searchMatrix(matrix, 3)).toBeTruthy();
    expect(searchMatrix(matrix, 13)).toBeFalsy();
  })
})
