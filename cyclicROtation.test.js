const cyclicRotation = require("./cyclicRotation")

describe("Cyclic Rotation", () => {
  it("rotate an array to the right by a given number of steps", () => {
    expect(cyclicRotation([3, 8, 9, 7, 6],3)).toEqual([9, 7, 6, 3, 8])
    expect(cyclicRotation([0, 0, 0],1)).toEqual([0, 0, 0])
    expect(cyclicRotation([1, 2, 3, 4],4)).toEqual([1, 2, 3, 4])
    expect(cyclicRotation([3, 8, 9, 7, 6],6)).toEqual([6, 3, 8, 9, 7])
  })
})
