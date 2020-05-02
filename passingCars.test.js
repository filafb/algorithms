const passingCars = require("./passingCars")

describe("Passing Cars", () => {
  test("returns the number of pairs of cars passing each other, considering 0 values as cars travelling west and 1 values as cars travelling east", () => {
    expect(passingCars([0,1,0,1,1])).toBe(5)
    expect(passingCars([1,0,0,1])).toBe(2)
    expect(passingCars([0,1,0,1])).toBe(3)

  })
})
