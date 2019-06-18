const minWindow = require('./minimumWindowSubstring');

describe('min Window', () => {
  it('returns the smallest substring in s that contains all char in t', () => {
    expect(minWindow('a', 'a')).toBe('a');
    expect(minWindow('ADOBECODEBANC', 'ABC')).toBe('BANC');
    expect(minWindow('abcde', 'ad')).toBe('abcd');
    expect(minWindow('abcdea', 'ad')).toBe('dea');
    expect(minWindow('abcdefg', 'aff')).toBe('')
  })
})
