//source: https://leetcode.com/problems/house-robber-iii/

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
var rob = function(root) {

  //naive approach - bad time performance due to to compute root we need root.left, root.right, root.left.left, root.left.right, root.right.left and root.right.right and to compute root.left, we need root.left.left, root.left.right. Same for root.right
  // 1. recursively return the Max of val + grandchildren and child1 + child2

  //How to use hashmap to remember the node already computed? //
  // a different way to think: always to scenario: root is robbed or not. if its, we are free to rob the grandchildren. if not, we are free to rob the children. Calculate both alternatatives, and then return the max value


  if(!root) return 0
  let val = 0;
  if(!root.left && !root.right) {
    return Math.max(root.val, rob(root.left) + rob(root.right))
  }
  val += Math.max(root.val, rob(root.left) + rob(root.right));
  return val
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let root = new TreeNode(3)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(3)
root.right.left = new TreeNode(1)
console.log(rob(root))
