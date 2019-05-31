//source https://leetcode.com/problems/construct-quad-tree/
// We want to use quad trees to store an N x N boolean grid. Each cell in the grid can only be true or false. The root node represents the whole grid. For each node, it will be subdivided into four children nodes until the values in the region it represents are all the same.

// Each node has another two boolean attributes : isLeaf and val. isLeaf is true if and only if the node is a leaf node. The val attribute for a leaf node contains the value of the region it represents.

// N is less than 1000 and guaranteened to be a power of 2.
// If you want to know more about the quad tree, you can refer to its wiki => https://en.wikipedia.org/wiki/Quadtree

// Definition for a QuadTree node.
function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
  this.val = val;
  this.isLeaf = isLeaf;
  this.topLeft = topLeft;
  this.topRight = topRight;
  this.bottomLeft = bottomLeft;
  this.bottomRight = bottomRight;
};
/**
* @param {number[][]} grid
* @return {Node}
*/

const construct = function (grid) {

};

module.exports = construct
