/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

var maxDepthTopDown = function(root, depth = 0) {
  if(!root) return depth
  let left = maxDepthTopDown(root.left, depth + 1)
  let right = maxDepthTopDown(root.right, depth + 1)
  return Math.max(left, right)
}

module.exports = { maxDepth, maxDepthTopDown}
