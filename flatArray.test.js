const {flatArray, flatArrayRecursive} = require("./flatArray")

describe("Flat Array", () => {
  it("flats an array with recursion", () => {
    expect(flatArray([1,2,3,[1,2,[3,3,[[[4],5]]]],7])).toEqual([1,2,3,1,2,3,3,4,5,7])
  })
  it("and with recursion", () => {
    expect(flatArrayRecursive([1,2,3,[1,2,[3,3,[[[4],5]]]],7])).toEqual([1,2,3,1,2,3,3,4,5,7])
  })
})
