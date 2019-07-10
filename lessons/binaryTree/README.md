# Tree Definition
__A directed acyclic graph which has `N nodes` and `N-1 edges`.__

## Binary Tree
_It is a data sctructure_
_Has at most two children, left and right child_

## Traverse a Tree

### Pre-order Traversal
  1. Visit the root first;
  2. Then traverse the left subtree;
  3. Traverse the right subtree

        3
      /    \
    1       5
   / \    /   \
  2   4  6     8
     /    \   /
    7      9 10

Traversing: [3, 1, 2, 4, 7, 5, 6,9 ,8 ,10]

### In-order Traversal
 1. Traverse the left subtree;
 2. Visit the root;
 3. Traverse the right subtree

Traversing: [2, 1, 7, 4, 3, 6, 9, 5, 10, 8]

* For `Binary Search Tree` we can use `in-order traversal` to retrieve all the data in sorted order

### Post-order Traversal
  1. Traverse the left subtree;
  2. Traverse the right subtree;
  3. Visit root;

Traversing: [2,7,4,1,9,6,10,8,5,3]

* Deleting nodes in a tree, deletion process will be in post-order, which means delete its left child and its right child before delete the node itself
* Post-order is also used in mathematical expressions

