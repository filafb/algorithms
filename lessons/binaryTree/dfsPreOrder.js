//source: https://leetcode.com/problems/binary-tree-preorder-traversal/
var preorderTraversal = function(root) {
  let result = [];
  let node = root;
  let stack = []
  while(node) {
      result.push(node.val)
      if(node.right) stack.push(node.right)
      if(node.left) {
          node = node.left
      } else {
          node = stack.pop()
      }
  }
  return result
};

var preorderTraversalRecursive= function(root) {
  let result = [];
  if(root) {
    result.push(root.val);
    result = root.left ? [...result, ...preorderTraversalRecursive(root.left)] : result
    result = root.right ? [...result, ...preorderTraversalRecursive(root.right)] : result
  }

  return result
};

module.exports = {preorderTraversal, preorderTraversalRecursive}
