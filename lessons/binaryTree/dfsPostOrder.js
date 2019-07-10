//source: https://leetcode.com/problems/binary-tree-postorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let result = [];
    let stack = [];
    let node = root;
    while(node || stack.length) {
      while(node) {
        stack.push(node)
        //this node.left here is to avoid pushing node.right to stack when it will be the next node, otherwise, we would process node.right twice.
        if(node.left && node.right) stack.push(node.right)
        node = node.left || node.right
      }
      node = stack.pop();
      result.push(node.val)
      let lastNode = node;
      node = stack.pop()
      //we check if the last node processed is child of the new node. If so, we can process the curret node, meaning we finished processing its subtrees
      while(node && isParent(node, lastNode)) {
        result.push(node.val)
        lastNode = node;
        node = stack.pop()
      }

    }
    return result
};
function isParent(currentNode, lastNode) {
  return currentNode.right === lastNode || currentNode.left === lastNode
}

var postorderTraversalRec = function(root) {
  let result = [];
  if(root) {
    result = [...result, ...postorderTraversalRec(root.left), ...postorderTraversalRec(root.right), root.val]
  }
  return result
}

module.exports = {postorderTraversal, postorderTraversalRec}
