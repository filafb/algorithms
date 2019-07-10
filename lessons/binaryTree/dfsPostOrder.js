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


function TreeNode (val) {
  this.val = val;
  this.left = this.right = null
}
let node1 = new TreeNode(1)
let node2 = new TreeNode(2)
let node3 = new TreeNode(3)
let node4 = new TreeNode(4)
let node5 = new TreeNode(5)
let node6 = new TreeNode(6)
let node7 = new TreeNode(7)
let node8 = new TreeNode(8)
let node9 = new TreeNode(9)
let node10 = new TreeNode(10)

node3.left = node1
node1.left = node2
node1.right = node4
node4.left = node7
node3.right = node5
node5.left = node6
node6.right = node9
node5.right = node8
node8.left = node10

console.log(postorderTraversalRec(node3))
