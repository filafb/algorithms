const findTargetSumWays = require('./targetSum');

describe('findTargetSumWays', () => {
  test('returns how many ways is possible to match a target value assigning either + or - to all numbers in a given list', () => {
    expect(findTargetSumWays([1,1,1,1,1], 3).toEqual(5));
    expect(findTargetSumWays([1,2,3,4,5], 3).toEqual(3));
    expect(findTargetSumWays([3,5,6], 11).toEqual(0));
  });
})
