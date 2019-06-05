const countBinarySubstring = require('./countBinarySubstring');

describe('count Binary Substring', () => {
  test('returns the number of substrings that have the same number of 0\'s and 1\'s consecutively', () => {
    expect(countBinarySubstring('10')).toEqual(1);
    expect(countBinarySubstring('1010')).toEqual(3);
    expect(countBinarySubstring('10101')).toEqual(4);
    expect(countBinarySubstring('11100101')).toEqual(5);
    expect(countBinarySubstring('1111110')).toEqual(1);
    expect(countBinarySubstring('11111101')).toEqual(2);
  });
})
