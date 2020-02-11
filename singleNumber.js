/*
Source: https://leetcode.com/problems/single-number/
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

function singleNumber(nums) {
  // const hashObj = {}
  // for(let i = 0; i < nums.length; i++) {
  //   if(hashObj[nums[i]]) {
  //     delete hashObj[nums[i]]
  //   } else {
  //     hashObj[nums[i]] = true
  //   }
  // }
  // return Number(Object.keys(hashObj)[0])
  let  a = 0
  for(let i = 0; i < nums.length; i++) {
    a = a ^ nums[i]
  }
  return a
}

module.exports = singleNumber

