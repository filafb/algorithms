const convert = require('./zigZagConversion');

describe('convert', () => {
  it('applies a zig zag pattern, folloing a given interger as the number of rows in the pattern, to a string and return a new string, joining char by rows', () => {
    expect(convert('helloWorld', 4)).toBe('hoeWrlolld');
    expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR')
  } )
})
