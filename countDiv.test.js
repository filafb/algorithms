const countDiv = require("./countDiv")

describe("Count Div", () => {
  test("returns the number of integers within the range A..B that are divisible by k", () => {
    expect(countDiv(6,11,2)).toBe(3)
    expect(countDiv(6,11,3)).toBe(2)
    expect(countDiv(0,0,11)).toBe(1)
    expect(countDiv(1,10,15)).toBe(0)
    expect(countDiv(1,30,15)).toBe(2)
    expect(countDiv(1,10,15)).toBe(0)
    expect(countDiv(6,12,3)).toBe(3)
    expect(countDiv(20,50,17)).toBe(1)
  })
})
