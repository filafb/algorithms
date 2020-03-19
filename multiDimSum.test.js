const {multiDimSumArray, multiDimSumArrayRecursive} = require("./multiDimSum")

describe("Multi Dim Sum Array", () => {
  it("returns the sum the value of a multi dimensional array", () => {
    expect(multiDimSumArrayRecursive([1,3,[4,3,1,[3,2],2],2,6,[7]])).toBe(34)
    expect(multiDimSumArray([[[[[[[1]]]]]]])).toBe(1)
    expect(multiDimSumArray([[[[[[[1]]]]]],2])).toBe(3)
  })
  it("works without recursion", () => {
    expect(multiDimSumArray([1,3,[4,3,1,[3,2],2],2,6,[7]])).toBe(34)
    expect(multiDimSumArray([[[[[[[1]]]]]]])).toBe(1)
    expect(multiDimSumArray([[[[[[[1]]]]]],2])).toBe(3)
  })
})
