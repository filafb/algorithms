const jump = require('./jumpGame')

describe('Jump Game', () => {
  test('return the minimum step necessary to reach the end of the given array, considering each value the max number of jumps from that position', () => {
    expect(jump([2,3,5,1,1,1,1,1])).toBe(2)
    expect(jump([2,3,1,1,4])).toBe(2)
    expect(jump([1,2,1,3,4])).toBe(3)
    expect(jump([1,2,1,1,1])).toBe(3)
    expect(jump([1])).toBe(0)
    expect(jump([1,1,1,1,1,1,1,1,1,1,1])).toBe(10)
  })
})
