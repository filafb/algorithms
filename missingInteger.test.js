const missingInteger = require("./missingInteger")

describe("MissingInteger", () => {
  it("returns the smallest integer grater than 0 that is not presented in the given array", () => {
    expect(missingInteger([1,2,3,5])).toBe(4)
    expect(missingInteger([-3,-1,-15])).toBe(1)
    expect(missingInteger([5, 4, 2, 8, 2, 5, 3, 1, 10])).toBe(6)
  })
})
