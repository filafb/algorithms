const isBST = require('./binarySearchTreeValidation')

describe('isBST', () => {
  it('returns false if a tree is not a BST', () => {
    const t1 = {
      value: 1,
      right:
        { value: 2,
          right: { value: 5, right: null, left: null }, left: null },
      left:
      {
        value: 3,
        right: { value: 8, right: null, left: null },
        left: { value: 5, right: null, left: null }
      }
    }
    expect(isBST(t1)).toBeFalsy();
  });
  it('returns true if a tree is a BST in asc order', () => {
    const t1 = {
      value: 5,
      right:
        { value: 7,
          right: { value: 8, right: null, left: null }, left: null },
      left:
      {
        value: 3,
        right: { value: 4, right: null, left: null },
        left: { value: 1, right: null, left: null }
      }
    }
    expect(isBST(t1)).toBeTruthy();
  });
  it('returns true if a tree is a BST in desc order', () => {
    const t1 = {
      value: 5,
      right:
        { value: 4,
          right: { value: 3, right: null, left: null }, left: null },
      left:
      {
        value: 8,
        right: { value: 6, right: null, left: null },
        left: { value: 9, right: null, left: null }
      }
    }
    expect(isBST(t1)).toBeTruthy();
  })
})
