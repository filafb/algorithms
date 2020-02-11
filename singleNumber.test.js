const singleNumber = require("./singleNumber")


describe('Single Number', () => {
  it('returns the single number in an array', () => {
    expect(singleNumber([2,2,1,1,4])).toBe(4)
    expect(singleNumber([1,2,4,2,4])).toBe(1)
    expect(singleNumber([1,-2,4,-2,4,1,3,5,3,5,6,9,12,15,8,12,6,9,15, 0, 0])).toBe(8)

  })
})
