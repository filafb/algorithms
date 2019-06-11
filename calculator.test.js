const calculator = require('./calculator');

const s = "2 / 2 + 3 * 4 - 6";
const s1 = "2 * 2 * 2 * 2";
const s2 = "10 / 5 * 3 + 2 + 1 - 10 * 4"

describe('Calculator', () => {
  it('returns the value from a string representing a calculation', () => {
    expect(calculator.evaluate(s)).toBe(7);
    expect(calculator.evaluate(s1)).toBe(16);
    expect(calculator.evaluate(s2)).toBe(-31);
  })
})
