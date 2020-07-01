const riverSizes = require("./riverSizes")

describe("River Sizes", () => {
  it("returns an array with the length of all 'rivers' in a 2D array. River is all horizontally or vertically 1 adjacent. 0 is land", () => {
    expect(riverSizes([[1,0,1,0],[0,1,1,1], [1,0,0,1]]).sort((a,b) => a - b)).toEqual([1,1,5])
    expect(riverSizes([
      [1, 0, 0, 1, 0],
      [1, 0, 1, 0, 0],
      [0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0]
    ]).sort((a,b) => a - b)).toEqual([1,2,2,2,5])
  })
})
