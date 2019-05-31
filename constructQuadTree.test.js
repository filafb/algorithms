const construct = require('./constructQuadTree');

describe('construct', () => {

  let mainNode;
  const grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]];

  beforeAll(() => {
    mainNode = construct(grid);
  })

  test('store a NxN boolean grid as a quadTree', () => {
    expect(mainNode.isLeaf).toBeFalsy();
    const { topLeft, topRight, bottomLeft, bottomRight} = mainNode;
    expect(topLeft.val).toBe(true);
    expect(topLeft.isLeaf).toBe(true);
    expect(bottomLeft.val).toBe(true);
    expect(bottomLeft.isLeaf).toBe(true);
    expect(bottomRight.val).toBe(false);
    expect(bottomRight.isLeaf).toBe(true);
    expect(topRight.isLeaf).toBeFalsy();
  });
  test('create node for lower levels nodes', () => {
    const { topLeft, topRight, bottomLeft, bottomRight } =  mainNode.topRight;
    expect(topLeft.val).toBe(false);
    expect(topLeft.isLeaf).toBe(true);
    expect(topRight.val).toBe(false);
    expect(topRight.isLeaf).toBe(true);
    expect(bottomLeft.val).toBe(true);
    expect(bottomLeft.isLeaf).toBe(true);
    expect(bottomRight.val).toBe(true);
    expect(bottomRight.isLeaf).toBe(true);
  });
})
