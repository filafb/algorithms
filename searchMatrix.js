//source: https://leetcode.com/problems/search-a-2d-matrix/

// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

//Integers in each row are sorted from left to right.
//The first integer of each row is greater than the last integer of the previous row.


//time: O(log r + log c) r = number of arrays (rows) c = number of items inside each array (columns)
//space: O(1)
// eslint-disable-next-line complexity
function searchMatrix(matrix, target) {
  let foundArray = false;
  let leftMatrix = 0;
  let rightMatrix = matrix.length - 1;
  let middleMatrix;
  //loop over rows, performing bst
  while (!foundArray && leftMatrix <= rightMatrix) {
    middleMatrix = Math.floor((rightMatrix + leftMatrix) / 2);
    let currentArray = matrix[middleMatrix];
    //finding a value in the head or tail, return true
    if (currentArray[0] === target || currentArray[currentArray.length - 1] === target) return true;
    // if target is greater than head, and smaller than tail, our value is inside this array
    if (currentArray[0] < target) {
      if(currentArray[currentArray.length - 1] > target ) {
        foundArray = true;
        break
      }
      // if not, we have to move middle
      leftMatrix = middleMatrix + 1;
    }
    //else means target is smaller than the head of the array in the middle
    else {
      rightMatrix = middleMatrix - 1;
    }
  }
  //if we exit the loop and we couldn't find
  if(!foundArray) return false;
  let targetArray = matrix[middleMatrix];
  let left = 0;
  let right = targetArray.length - 1;
  let middle;
  while(left <= right) {
    middle = Math.floor((right + left) /2);
    if(targetArray[middle] === target) return true;
    if(targetArray[middle] > target) {
      right = middle -1 ;
    } else {
      left = middle + 1;
    }
  }
  return false
}

module.exports = searchMatrix;

function bs(arr, t) {
  let right = arr.length -1;
  let left = 0;
  let mid;
  while(left <= right) {
    mid = Math.floor((right + left) / 2 );
    if(arr[mid] === t) return true;
    if(arr[mid] > t) {
      right = mid - 1;
    } else {
      left = mid + 1
    }
  }
  return false
}

