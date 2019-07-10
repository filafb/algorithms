//source: https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/

var inorderTraversal = function(root) {
  let result = [];
  let stack = [];
  let node = root
  while(node || stack.length) {
    while(node) {
      stack.push(node)
      node = node.left
    }
    node = stack.pop()
    result.push(node.val)
    node = node.right
  }
  return result
};


var inOrderTraversalRec = function(root) {
  let result = []
  if(root) {
    result = [...result, ...inOrderTraversalRec(root.left)]
    result.push((root.val))
    result = [...result, ...inOrderTraversalRec(root.right)]
  }
  return result
}

module.exports = {inorderTraversal, inOrderTraversalRec}
