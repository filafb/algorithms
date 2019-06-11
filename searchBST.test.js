const { searchBST, TreeNode} = require('./searchBST');

describe('search BST', () => {
  let treeOne;
  let treeTwo;
  let treeThree;
  let tree;
  let treeSeven;
  let treeSix;
  let treeTen;
  beforeAll(() => {
    treeOne = new TreeNode(1);
    treeTwo = new TreeNode(2);
    treeThree = new TreeNode(3);
    treeTwo.left = treeOne;
    treeTwo.right = treeThree
    tree = new TreeNode(5);
    tree.left = treeTwo;
    treeSeven = new TreeNode(7);
    treeSix = new TreeNode(6);
    treeTen = new TreeNode(10);
    tree.right = treeSeven;
    treeSeven.left = treeSix;
    treeSeven.right = treeTen;

  })

  it('search for a node that matches a given target value and returns its subtree', () => {
    expect(searchBST(tree, 2)).toEqual(treeTwo);
    expect(searchBST(tree, 10)).toEqual(treeTen);
  });
  it('returns null if the target value cannot be found in the tree', () => {
    expect(searchBST(tree, 9)).toBeNull()
  })
})
