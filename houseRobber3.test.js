const { rob, robMemo, robAlt } = require('./houseRobber3')

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let root = new TreeNode(3)
root.left = new TreeNode(2)
root.right = new TreeNode(4)
root.left.left = new TreeNode(6)
root.right.left = new TreeNode(1)

let root2 = new TreeNode(3)
root2.left = new TreeNode(2)
root2.right = new TreeNode(3)
root2.left.right = new TreeNode(3)
root2.right.right = new TreeNode(1)

let root3 = new TreeNode(2)
root3.left = new TreeNode(1)
root3.right = new TreeNode(3)
root3.left.right = new TreeNode(4)

describe('House Robber', () => {
  describe('calculates the max sum from root to leave in a BT, not allowing two directly-linked nodes beeing summed', () => {
    afterEach(() => {
    root.right.left = new TreeNode(1)
    root2.left.right.left = null
  })
    test('does it naively, on a O(nˆn) time complexity', () => {
      expect(rob(root)).toEqual(10)
      root.right.left = new TreeNode(2)
      expect(rob(root)).toEqual(11)
      expect(rob(root2)).toEqual(7)
      root2.left.right.left = new TreeNode(4)
      expect(rob(root2)).toEqual(9)
      expect(rob(root3)).toEqual(7)
    })
    test('does it using memoization, for a O(n) time complexity', () => {
      expect(robMemo(root)).toEqual(10)
      root.right.left = new TreeNode(2)
      expect(robMemo(root)).toEqual(11)
      expect(robMemo(root2)).toEqual(7)
      root2.left.right.left = new TreeNode(4)
      expect(robMemo(root2)).toEqual(9)
      expect(robMemo(root3)).toEqual(7)
    } )
    test('does it calculating two alternatives', () => {
      expect(robAlt(root)).toEqual(10)
      root.right.left = new TreeNode(2)
      expect(robAlt(root)).toEqual(11)
      expect(robAlt(root2)).toEqual(7)
      root2.left.right.left = new TreeNode(4)
      expect(robAlt(root2)).toEqual(9)
      expect(robAlt(root3)).toEqual(7)
    })
  })
})
