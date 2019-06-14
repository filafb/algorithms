const subtreeWithAllDeepest = require('./smallestSubtreeWithAllDeepestNodes');

function TreeNode(val){
  this.val = val;
  this.left = this.right = null;
}

describe('Sub tree with all deepest', () => {


  let nodeOne, nodeTwo, nodeThree, nodeFour, nodeFive, nodeSix, nodeSeven, nodeEight, nodeNine, nodeTen, nodeEleven, nodeTwelve, nodeThirteen
  beforeEach(() => {
    nodeOne = new TreeNode(1);
    nodeTwo = new TreeNode(2);
    nodeThree = new TreeNode(3);
    nodeFour = new TreeNode(4);
    nodeFive = new TreeNode(5);
    nodeSix = new TreeNode(6);
    nodeSeven = new TreeNode(7);
    nodeEight = new TreeNode(8);
    nodeNine = new TreeNode(9);
    nodeTen = new TreeNode(10);
    nodeEleven = new TreeNode(11);
    nodeTwelve = new TreeNode(12);
    nodeThirteen = new TreeNode(13);
  })

  it('returns the node with the max depth', () => {
    expect(subtreeWithAllDeepest(nodeOne)).toEqual(nodeOne);
  });
  it('if both the left and the right child one a node have a deepest descendant, returns this parent node', () => {
    nodeThree.left = nodeFive;
    nodeThree.right = nodeOne;
    nodeFive.left = nodeSix;
    nodeFive.right = nodeTwo;
    nodeOne.left = nodeTen;
    nodeOne.right = nodeEight;
    nodeTwo.left = nodeSeven;
    nodeTwo.right = nodeFour;
    expect(subtreeWithAllDeepest(nodeThree)).toEqual(nodeTwo);
  });
  it('returns the node with the max depth, even it doesnt have children', () => {
    nodeFive.left = nodeOne;
    nodeFive.right = nodeThree;
    nodeOne.right = nodeTwo;
    expect(subtreeWithAllDeepest(nodeFive)).toEqual(nodeTwo);
  });
  it('works when the subtree is a long one', () => {
    nodeOne.left = nodeTwo;
    nodeOne.right = nodeThree;
    nodeTwo.left = nodeFour;
    nodeTwo.right = nodeFive;
    nodeThree.left = nodeSix;
    nodeThree.right = nodeSeven;
    nodeFive.left = nodeEight;
    nodeFive.right = nodeNine;
    nodeEight.left = nodeTen;
    nodeEight.right = nodeEleven;
    nodeNine.left = nodeTwelve;
    nodeNine.right = nodeThirteen;
    expect(subtreeWithAllDeepest(nodeOne)).toEqual(nodeFive);
  })

})
