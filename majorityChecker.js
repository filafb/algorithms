//source: https://leetcode.com/problems/online-majority-element-in-subarray/

// Implementing the class MajorityChecker, which has the following API:

//     MajorityChecker(int[] arr) constructs an instance of MajorityChecker with the given array arr;
//     int query(int left, int right, int threshold) has arguments such that:
//         0 <= left <= right < arr.length representing a subarray of arr;
//         2 * threshold > right - left + 1, ie. the threshold is always a strict majority of the length of the subarray

// Each query(...) returns the element in arr[left], arr[left+1], ..., arr[right] that occurs at least threshold times, or -1 if no such element exists

/**
 * @param {number[]} arr
 */
var MajorityChecker = function(arr) {
  this.group = arr
  this.memory = new Map()
};

/**
* @param {number} left
* @param {number} right
* @param {number} threshold
* @return {number}
*/
MajorityChecker.prototype.query = function(left, right, threshold) {
  let map = {}
  for(let i = left; i <= right; i++) {
    if(!map[this.group[i]]) {
      map[this.group[i]] = 1
    } else {
      map[this.group[i]]++
    }
    if(map[this.group[i]] === threshold) {
      return this.group[i]
    }
  }
  return -1
};

/**
* Your MajorityChecker object will be instantiated and called as such:
* var obj = new MajorityChecker(arr)
* var param_1 = obj.query(left,right,threshold)
*/

let obj = new MajorityChecker([1,1,2,2,1,1])

console.log(obj.query(0,5,4))
console.log(obj.query(0,3,3))
console.log(obj.query(2,3,2))
