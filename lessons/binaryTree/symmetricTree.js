//source: https://leetcode.com/problems/symmetric-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true
    let queue = [root.left, root.right];
    while(queue.length) {
      let leftTempArr = [];
      let rightTempArr = [];
      let queueSize = queue.length - 1;
      for(let i = 0, j = queueSize; i < j; i++, j--) {
        if((!!queue[i] + !!queue[j]) === 1) return false
        if((!!queue[i] + !!queue[j]) === 0) continue
        if(queue[i].val !== queue[j].val) {
          return false
        }
        let leftNode = queue[i];
        let rightNode = queue[j];
        leftTempArr.push(leftNode.left, leftNode.right)
        rightTempArr.unshift(rightNode.left, rightNode.right)
      }
      queue = [...leftTempArr, ...rightTempArr]
    }
    return true
};

let isSymmetricRec = (root) => {
  if(!root) return true
  return isSymmetricHelper(root.left, root.right)
}

let isSymmetricHelper = (left, right) => {
  if(!left || !right) {
    return left === right
  };
  if(left.val !== right.val) {
    return false
  }
  return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left)
}

module.exports = {isSymmetric, isSymmetricRec}


