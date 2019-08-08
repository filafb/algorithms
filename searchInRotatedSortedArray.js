/* eslint-disable complexity */
//https://leetcode.com/problems/search-in-rotated-sorted-array/
//Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).


function search(nums, target) {
  let right = nums.length - 1;
  let left = 0;
  let mid;
  while (left <= right) {
    mid = Math.ceil((right + left) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid - 1] === undefined || nums[mid] < nums[mid - 1]) {
      if (nums[0] <= target && target <= nums[mid - 1]) {
        // means target is in the left part of the array
        right = mid -1;
        left = 0
      } else {
        left = mid;
        right = nums.length - 1;
      }
      break
    }
    else if (nums[mid] <= nums[right]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  while (left <= right) {
    mid = Math.ceil((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

module.exports = search
