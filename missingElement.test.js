const missingElement = require("./missingElement")


function generateRandomTestCase(n) {
  const arr = []
  for(let i = 0; i < n; i++) {
    arr.push(i+1)
  }
  const randomIndex = Math.floor((Math.random() * n-1) + 1)
  const popedNumber = arr.pop(randomIndex)
  arr.push(n+1)
  return {
    popedNumber,
    arr
  }
}


describe("Missing Element", () => {
  it("finds the missing element in a array containing a sequence of integers from 1 to N+1", () => {
    expect(missingElement([2])).toBe(1)
    expect(missingElement([4,3,5,2])).toBe(1)
    expect(missingElement([4,1,5,2])).toBe(3)
    expect(missingElement([7,6,3,2,4,5,1,9])).toBe(8)
    const randomTestOne = generateRandomTestCase(20)
    expect(missingElement(randomTestOne.arr)).toBe(randomTestOne.popedNumber)
    const randomTestTwo = generateRandomTestCase(500)
    expect(missingElement(randomTestTwo.arr)).toBe(randomTestTwo.popedNumber)
  })
})
