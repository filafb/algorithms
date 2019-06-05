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
  //1. test if grid is leaf or not (all values are the same)
  //2. Base case either,
    // grid.length === 1 or,
    // grid is leaf
    // returns => new Node(!!grid[0][0], true, null, null, null, null)
  //3. recursive case:
  //4. Break the grid in 4 smaller grids
  //5. return new Node('*', isLeaf, construct(newGrid[0], construct(newGrid[1], construct(newGrid[2], construct(newGrid[3]))

};

/**
* @param {number[][]} grid
* @return {boolean}
*/

const isLeaf = function (grid) {
  //1. find value for the first element
  // forEach array in he grid, loop over its value. When different than first value, return false
  // else return true

}

const breakGrid = function (grid) {
  // create an array 4 x 4
  // Find the size of the grid
  // divide by 2 = x
  // loop over it, checking if the value / x for col and row.
  // if col is negative, its in the left. If row is negative, its in the top. Push current value to the right array
  // return the array crated


}

module.exports = construct
