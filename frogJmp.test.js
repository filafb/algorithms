const frogJmp = require("./frogJmp")

describe("Frog Jump", () => {
  it("Given a fixed distance, returns the minimal number of jumps to get from X to Y", () => {
    expect(frogJmp(10, 85, 30)).toBe(3)
    expect(frogJmp(1, 10, 2)).toBe(5)
    expect(frogJmp(1, 10, 11)).toBe(1)
  })
})
