const tapeEquilibrium = require("./tapeEquilibrium")

describe("Tape Equilibrium", () => {
  it("returns the minimum difference beteween two subarrays within an array", () => {
    expect(tapeEquilibrium([3, 1, 2, 4, 3])).toBe(1)
    expect(tapeEquilibrium([-3, -1, -2, -4, -3])).toBe(1)
    expect(tapeEquilibrium([3, 5])).toBe(2)
    expect(tapeEquilibrium([1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(1)
    expect(tapeEquilibrium([3, 5, 4, 5,10, -3, 1, 2])).toBe(3)
    expect(tapeEquilibrium([-3, 3])).toBe(6)
    expect(tapeEquilibrium([3, -3])).toBe(6)
    expect(tapeEquilibrium([3, 2, -2, -3])).toBe(6)

  })
})
