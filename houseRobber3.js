//source: https://leetcode.com/problems/house-robber-iii/

/**
 *
 * The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.
 */

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
  // 1. recursively return the Max between val + grandchildren and child1 + child2

  //base case:
  if(!root) return 0
  let val = 0;
  // if there is either left or right, compute its children
  if(root.left) {
    val += rob(root.left.left) + rob(root.left.right)
  }
  if(root.right) {
    val += rob(root.right.left) + rob(root.right.right)
  }
  //then, compare the value of root plus grandchidren agaisnt the root children
  return Math.max(root.val + val, rob(root.left) + rob(root.right));
};

function robMemo(root, map = null) {
   //How to use hashmap to remember the node already computed? //
  if(!map) {
    map = new Map()
  }
  if(!root) return 0
  //Memoization part: if we have already found the best case scenario for that node, we don't need to recalculate it.
  if(map.has(root)) {
    return map.get(root)
  }
  let val = 0
  if(root.left) {
    val += robMemo(root.left.left, map) + robMemo(root.left.right, map)
  }
  if(root.right) {
    val += robMemo(root.right.left, map) + robMemo(root.right.right, map)
  }
  //we find the highest value to update val. Either root plus grandchildren or children
  val = Math.max(root.val + val, robMemo(root.left, map) + robMemo(root.right, map))
  map.set(root, val)
  return val

}

function robAlt(root) {
  // a different way to think: always two scenario: root is robbed or not. if its, we are free to rob the grandchildren. if not, we are free to rob the children. Calculate both alternatatives, and then return the max value
  return Math.max(...robHelper(root))
}

function robHelper(root) {
  //for the base case, we return a basic array [0,0]
  if(!root) return new Array(2).fill(0)
  let choices = new Array(2)
  let left = robHelper(root.left)
  let right = robHelper(root.right)
  //the first element is a decision between the highist value in the subtree, since we are not picking the root
  choices[0] = Math.max(...left) + Math.max(...right)
  //the second element, we pick root, so we cannot pick the children. We pick the max values of their subtree, not including their (children) value
  choices[1] = root.val + left[0] + right[0]
  return choices
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let root2 = new TreeNode(3)
root2.left = new TreeNode(2)
root2.right = new TreeNode(3)
root2.left.right = new TreeNode(3)
root2.right.right = new TreeNode(1)
root2.left.right.left = new TreeNode(4)
console.log(robAlt(root2))

module.exports = { rob, robMemo, robAlt }
