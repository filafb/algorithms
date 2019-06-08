//source: https://www.codewars.com/kata/588534713472944a9e000029
//write a function that will validate that a given binary tree is a binary search tree. The sort order is not predefined so it should work with either.
//Time: O(n) //Space: O(n)
const isBST = node => {
  if(!node) return true
    const arr = traverseTree(node)
    let asc = arr[0] < arr[1] ? true : false
    for(let i = 2; i < arr.length; i++){
      if(arr[i-1] < arr[i] !== asc) {
        return false
      }
    }
    return true
  };

function traverseTree(node, arr=[]) {

  if(node === null) {
    return
  }
  traverseTree(node.left, arr);
  arr.push(node.value)
  traverseTree(node.right, arr)
  return arr
}

const t1 = {
  value: 1,
  right:
    { value: 2,
      right: { value: 5, right: null, left: null }, left: null },
  left:
  {
    value: 3,
    right: { value: 8, right: null, left: null },
    left: { value: 5, right: null, left: null }
  }
}

module.exports = isBST
