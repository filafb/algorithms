//source: https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null
}

let node1 = new TreeNode(1)
let node2 = new TreeNode(2)
let node3 = new TreeNode(3)
node1.right = node2
node2.left = node3

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
console.log(inorderTraversal(node1))

var inOrderTraversalRec = function(root) {
  let result = []
  if(root) {
    result = [...result, ...inOrderTraversalRec(root.left)]
    result.push((root.val))
    result = [...result, ...inOrderTraversalRec(root.right)]
  }
  return result
}
console.log(inOrderTraversalRec(node1))
