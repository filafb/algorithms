const validPalindrome = require('./validPalindrome')

describe('validPalindrome', () => {
  test('if a given string is palindrome, allowing to delete at most one character', () => {
    expect(validPalindrome('aba')).toBeTruthy();
    expect(validPalindrome('abca')).toBeTruthy();
    expect(validPalindrome('abcda')).toBeFalsy();
    const longString = "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
    expect(validPalindrome(longString)).toBeTruthy();
    expect(validPalindrome("deeee")).toBeTruthy();
    expect(validPalindrome('abc')).toBeTruthy();
  });
})

