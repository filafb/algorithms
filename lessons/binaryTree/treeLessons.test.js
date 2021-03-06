const { inorderTraversal, inOrderTraversalRec } = require('./dfsInOrder');
const { preorderTraversal, preorderTraversalRecursive } = require('./dfsPreOrder');
const { postorderTraversal, postorderTraversalRec } = require('./dfsPostOrder')
const { levelOrder } = require('./bfs')
const { maxDepth, maxDepthTopDown } = require('./maxDepth')
const {isSymmetric, isSymmetricRec} = require('./symmetricTree');
const hasPathSum = require('./pathSum')

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


describe('pre Order traversal', () => {
  describe('visit the root first, traverse the left subtree, and then the right subtree', () => {
    let preOrderOne = [3, 1, 2, 4, 7, 5, 6, 9, 8, 10]
    let preOrderTwo = [1, 2, 3]
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
    let inOrderOne = [2, 1, 7, 4, 3, 6, 9, 5, 10, 8]
    let inOrderTwo = [1, 3, 2]
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
    let postOrderOne = [2, 7, 4, 1, 9, 6, 10, 8, 5, 3]
    let postOrderTwo = [3, 2, 1]
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
  let dfsOne = [[3], [1, 5], [2, 4, 6, 8], [7, 9, 10]]
  let dfsTwo = [[1], [2], [3]]
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

describe('is Symmetric', () => {
  describe('evaluate whether a tree is symetric or not', () => {
    it('works iteratively and recursively', () => {
      let newNode1 = new TreeNode(1)
      let newNode2 = new TreeNode(2)
      let newNode3 = new TreeNode(3)
      let newNode4 = new TreeNode(4)
      newNode1.left = {...newNode2}
      expect(isSymmetric(newNode1)).toBeFalsy();
      expect(isSymmetricRec(newNode1)).toBeFalsy();
      newNode1.right = {...newNode2}
      expect(isSymmetric(newNode1)).toBeTruthy();
      expect(isSymmetricRec(newNode1)).toBeTruthy();
      newNode1.left.left = {...newNode4}
      expect(isSymmetric(newNode1)).toBeFalsy();
      expect(isSymmetricRec(newNode1)).toBeFalsy();
      newNode1.right.right = {...newNode4}
      expect(isSymmetric(newNode1)).toBeTruthy();
      expect(isSymmetricRec(newNode1)).toBeTruthy();
      newNode1.left.right = {...newNode3}
      expect(isSymmetric(newNode1)).toBeFalsy();
      expect(isSymmetricRec(newNode1)).toBeFalsy();
      newNode1.right.left = {...newNode3}
      expect(isSymmetric(newNode1)).toBeTruthy();
      expect(isSymmetricRec(newNode1)).toBeTruthy();
    })
  })
})

describe('path sum', () => {
  it('evaluates whether a tree has a root-to-leaf path that adds up a given target value', () => {
    expect(hasPathSum(node3, 6)).toBeTruthy();
    expect(hasPathSum(node3, 26)).toBeTruthy();
    expect(hasPathSum(node3, 8)).toBeFalsy();
    node2.right = -10
    expect(hasPathSum(node3, -4)).toBeTruthy();
    expect(hasPathSum(nodeOne, 1)).toBeFalsy();
  })
})
