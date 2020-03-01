const frogRiver = require("./frogRiver")

describe("Frog River", () => {
  it("returns the amount of time necessary from a frog to cross a river, given a position to be reached and an array a where i represents the time in seconds and a[i] the position of a leave. To be able to be crossed, all position from 0 to k has to be filled.", () => {
    expect(frogRiver(5,[1, 3, 1, 4, 2, 3, 5, 4])).toBe(6)
    expect(frogRiver(5, [1, 3, 1, 2, 2, 3, 5, 4])).toBe(7)
  })
  it("should return -1 if reaching k is not possible", () => {
    expect(frogRiver(5, [1, 3, 1, 2, 2, 3, 5, 5])).toBe(-1)
    expect(frogRiver(6, [1, 3, 1, 2, 2, 3, 5, 4])).toBe(-1)
  })
})
