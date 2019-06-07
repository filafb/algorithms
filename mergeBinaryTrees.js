//source: https://leetcode.com/problems/merge-two-binary-trees/
// Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

//You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

//Time: 0(n) Space: 0(n)

var mergeTrees = function (t1, t2) {
  //base case
  if (t1 === null) {
    return t2
  }
  if (t2 === null) {
    return t1
  }
  //recursive case
  let newTree = new TreeNode(t1.val + t2.val, mergeTrees(t1.left, t2.left), mergeTrees(t1.right, t2.right))
  return newTree
};

function TreeNode(value, left = null, right = null) {
  this.val = value;
  this.left = left;
  this.right = right
}

module.exports = mergeTrees
