//source: https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/

//Given a binary tree rooted at root, the depth of each node is the shortest distance to the root.

//A node is deepest if it has the largest depth possible among any node in the entire tree.

//The subtree of a node is that node, plus the set of all descendants of that node.

//Return the node with the largest depth such that it contains all the deepest nodes in its subtree.


// The problem isnt clear. We have to return the entire tree containing the deepest nodes.

//Example1:
// Input: [3,5,1,6,2,0,8,null,null,7,4]
// Output: [2,7,4]
//Example 2:
//Input: [1,2,3,4,5,6,7,null, null ,8,9,null,null, null,null, 10,11,12,13]
//Output: [5,8,9,10,11,12,13]
//Example3:
// Input: [0,1,3,null,2]
//Output: [2]

/**
* 1. If the node in question has maximum depth, it is the answer.

* 2. If both the left and right child of a node have a deepest descendant, then the answer is this parent node.

* 3. Otherwise, if some child has a deepest descendant, then the answer is that child.

*4. Otherwise, the answer for this subtree doesn't exist} root
 */

 /**
  * Right Approch:
  *   1. DFS, calculating the depth of each node.
  *   2. Find the biggest depth.
  *   3. Another FDS, now finding the subtree
  *     3.1 If node == null or depthNode = maxDepth, return node,
  *     3.2 calculate the answer to left and right nodes.
  *     3.3. If both are null, return node
  *     3.4.if one of then is null, return the other
  *
  *  */


var subtreeWithAllDeepest = function(root) {
  let queue = [root];
  let candidate = root;
  while(queue.length) {
      let left = queue[0].left;
      let right = queue[0].right;
      candidate = left || right ? queue[0] : candidate;
      if (left) queue.push(left);
      if(right) queue.push(right);
      queue.shift();
  }
  return candidate
};

module.exports = subtreeWithAllDeepest
