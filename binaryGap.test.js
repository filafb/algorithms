const binaryGap = require("./binaryGap")


describe("Binary Gap", () => {
  it("Converts an integer to its binary representation and returns the longets sequence of zeros. It has to be between 1s", () => {
    expect(binaryGap(9)).toBe(2)
    expect(binaryGap(529)).toBe(4)
    expect(binaryGap(20)).toBe(1)
    expect(binaryGap(15)).toBe(0)
    expect(binaryGap(1041)).toBe(5)
  })
})
