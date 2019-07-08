var preorderTraversalIteratively = function(root) {
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

function TreeNode (val) {
  this.val = val;
  this.left = this.right = null
}

let node1 = new TreeNode(1)
let node2 = new TreeNode(2)
let node3 = new TreeNode(3)
node1.right = node2
node2.left = node3

var preorderTraversalRecursive= function(root) {
  let result = [];
  if(root) {
    result.push(root.val);
    result = root.left ? [...result, ...preorderTraversalRecursive(root.left)] : result
    result = root.right ? [...result, ...preorderTraversalRecursive(root.right)] : result
  }

  return result
};

console.log(preorderTraversalRecursive(node1))
