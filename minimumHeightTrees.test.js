const findMinHeightTrees = require('./minimumHeightTrees');

describe('find min height tree', () => {
  it('returns the root labels of the MHTs from a rooted tree, given the number of nodes and all the edges', () => {
    expect(findMinHeightTrees(4, [[1,0], [1,2], [1,3]])).toEqual([1]);
    expect(findMinHeightTrees(6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]])).toEqual([3,4]);
  });
})
