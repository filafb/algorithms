const hasGroupsSizeX = require('./hasGroupsSizeX')

describe('Has Group Size X', () => {
  test('given an array of integers, returns if its possible to group all different integers in groups of the same size, when group size > 1', () => {
    expect(hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2])).toBeTruthy()
    expect(hasGroupsSizeX([1,1])).toBeTruthy()
  })
  expect(hasGroupsSizeX([1,1,2])).toBeFalsy()
  expect(hasGroupsSizeX([1,1,2,2])).toBeTruthy()
  expect(hasGroupsSizeX([1,1,2,2,1])).toBeFalsy()
  expect(hasGroupsSizeX([1,1,2,2,1,2])).toBeTruthy()
  expect(hasGroupsSizeX([1,1,2,2,1,2,1,1,1,2,2,2,3,3,3])).toBeTruthy()
  expect(hasGroupsSizeX([1])).toBeFalsy()
})
