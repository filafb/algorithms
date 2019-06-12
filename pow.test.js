const myPow = require('./pow');
console.log(myPow)
describe('my pow', () => {
  test(' returns the base to the exponent power', () => {
    expect(myPow(2,2)).toBe(4);
    expect(myPow(2,10)).toBe(1024);
    expect(myPow(5,30)).toBe(931322574615478500000);
    expect(myPow(2,-2)).toBe(0.25);
    expect(myPow(1.44,-2)).toBe(0.4822530864197531);
  })
})
