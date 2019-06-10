//source https://leetcode.com/problems/minimum-height-trees/
/**
For an undirected graph with tree characteristics, we can choose any node as the root. The result graph is then a rooted tree. Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs). Given such a graph, write a function to find all the MHTs and return a list of their root labels.

Format
The graph contains n nodes which are labeled from 0 to n - 1. You will be given the number n and a list of undirected edges (each edge is a pair of labels).

You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  /**
   * Approach
   * Since we can choose any node as the root, in theory we have to check the height of all possible root.
   * However, we can start eliminating all leaves in the same speed, until we get to the common point between all leves. This one (or these one) will be our MHT, since they will be in the middle of the tree.
   */
  //Coding:
  //1. Create a hash table where 0 to n are the keys (all the labels of our nodes) and the values are empty arrays
  //2. loop over the edges, adding the correspondent pair to the array of its pair. If we have a pair of [0,2], the hash table should be updated as {0: [2], 2:[0]}
  //3. Loop over the hash table. All nodes with 1 edge are leaves. Store these values in a array called leaves.
  //4. Loop over the hash table while n > 2, removing all leaves -> deleting the key from the hash table, and also from all node it's a connection. Plus, pop it from the leaves array
  //4.1 check if the node we deleted the leave from has length of 1 (a new leave). If so, update the leaves array.
  //4.2 update n, reducing the current number of leaves
  // when n <= 2, return leaves.



};
module.exports = findMinHeightTrees

/**
 * Concepts & Explanation:
 * Tree grahp theory:
 * 1. Any connected graph who has n nodes with with n-1 edges is a tree
 *        1     2
 *         \   /
 *           5
 *         /   \
 *        3     4
 * nodes = 5 // edges: 4 (n-1)
 * 2. Degree of a vertex of a pragh is the number of edges incident to the vertex
 * Degree of 5 = 4 // All other: 1
 * 3. A leaf is a vertex of degree 1. A internal vertex is a vertex of degree at least 2.
 *  Leaves: 1, 2, 3, 4 // Internal Vertex: 5
 * 4. A tree is called a rooted tree if one vertex has been designeted as root.
 * 5. The height of a rooted tree is the number of edges on the longest downward path between root and a leaf
 * In the example above:
 *  5 as root: height: 1;
 *  Any other as root: height: 2
 */

