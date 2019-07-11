//source: https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return []
  let queue = [root];
  let result = [];
  let queueLength;
  let tempArr = [];
  let current
  while(queue.length) {
    queueLength = queue.length
    for(let i = 0; i < queueLength; i++) {
      current = queue.shift();
      if(current === null) continue
      tempArr.push(current.val)
      let { right, left } = current
      queue.push(left, right)
    }
    if(tempArr.length) result.push(tempArr)
    tempArr = []
  }
  return result
};

function TreeNode (val) {
  this.val = val;
  this.left = this.right = null
}

let node3 = new TreeNode(3)
let node9 = new TreeNode(9)
let node20 = new TreeNode(20)
let node15 = new TreeNode(15)
let node7 = new TreeNode(7)


module.exports = {levelOrder}
