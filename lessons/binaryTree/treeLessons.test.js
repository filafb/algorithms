const { inorderTraversal, inOrderTraversalRec } = require('./dfsInOrder');
const { preorderTraversal, preorderTraversalRecursive } = require('./dfsPreOrder');
const { postorderTraversal, postorderTraversalRec } = require('./dfsPostOrder')
const { levelOrder } = require('./bfs')
const { maxDepth, maxDepthTopDown } = require('./maxDepth')

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null
}
let node1 = new TreeNode(1)
let node2 = new TreeNode(2)
let node3 = new TreeNode(3)
let node4 = new TreeNode(4)
let node5 = new TreeNode(5)
let node6 = new TreeNode(6)
let node7 = new TreeNode(7)
let node8 = new TreeNode(8)
let node9 = new TreeNode(9)
let node10 = new TreeNode(10)
let nodeOne = new TreeNode(1)
let nodeTwo = new TreeNode(2)
let nodeThree = new TreeNode(3)

nodeOne.right = nodeTwo
nodeTwo.left = nodeThree
node3.left = node1
node1.left = node2
node1.right = node4
node4.left = node7
node3.right = node5
node5.left = node6
node6.right = node9
node5.right = node8
node8.left = node10

let preOrderOne = [3, 1, 2, 4, 7, 5, 6, 9, 8, 10]
let preOrderTwo = [1, 2, 3]
let inOrderOne = [2, 1, 7, 4, 3, 6, 9, 5, 10, 8]
let inOrderTwo = [1, 3, 2]
let postOrderOne = [2, 7, 4, 1, 9, 6, 10, 8, 5, 3]
let postOrderTwo = [3, 2, 1]
let dfsOne = [[3], [1, 5], [2, 4, 6, 8], [7, 9, 10]]
let dfsTwo = [[1], [2], [3]]


describe('pre Order traversal', () => {
  describe('visit the root first, traverse the left subtree, and then the right subtree', () => {
    it('works iteratively', () => {
      expect(preorderTraversal(node3)).toEqual(preOrderOne)
      expect(preorderTraversal(nodeOne)).toEqual(preOrderTwo)
    });
    it('and recursively', () => {
      expect(preorderTraversalRecursive(node3)).toEqual(preOrderOne)
      expect(preorderTraversalRecursive(nodeOne)).toEqual(preOrderTwo)
    })
  })
})

describe('in order traversal', () => {
  describe('traverse the left subtree, visit root, than traverse the right tree', () => {
    it('works iteratively', () => {
      expect(inorderTraversal(node3)).toEqual(inOrderOne)
      expect(inorderTraversal(nodeOne)).toEqual(inOrderTwo)
    });
    it('and recursively', () => {
      expect(inOrderTraversalRec(node3)).toEqual(inOrderOne)
      expect(inOrderTraversalRec(nodeOne)).toEqual(inOrderTwo)
    })
  })
})

describe('post order traversal', () => {
  describe('traverse the left subtree, traverse the right tree, than visit the root', () => {
    it('works iteratively', () => {
      expect(postorderTraversal(node3)).toEqual(postOrderOne)
      expect(postorderTraversal(nodeOne)).toEqual(postOrderTwo)
    });
    it('and recursively', () => {
      expect(postorderTraversalRec(node3)).toEqual(postOrderOne)
      expect(postorderTraversalRec(nodeOne)).toEqual(postOrderTwo)
    })
  })
})

describe('Breadth-First search', () => {
  it('traverse the tree level by level', () => {
    expect(levelOrder(node3)).toEqual(dfsOne)
    expect(levelOrder(nodeOne)).toEqual(dfsTwo)
  })
})


describe('max Depth', () => {
  describe('recursively calculates the tree depth', () => {
    let maxDepthOne = 4
    let maxDepthTwo = 3
    it('bottomUp', () => {
      expect(maxDepth(node3)).toEqual(maxDepthOne)
      expect(maxDepthTopDown(nodeOne)).toEqual(maxDepthTwo)
    })
    it('and TopDown', () => {
      expect(maxDepth(node3)).toEqual(maxDepthOne)
      expect(maxDepthTopDown(nodeOne)).toEqual(maxDepthTwo)
    })
  })
})
