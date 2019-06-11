
//Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.
/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

//Time: O(logn) // Space = O(1)
var searchBST = function (root, val) {
  let node = root;
  while (node) {
    if (node.val === val) {
      return node;
    } else if (node.val > val) {
      node = node.left;
    } else if (node.val < val) {
      node = node.right
    }
  }
  return node
};

module.exports = { searchBST, TreeNode };
