//source: https://leetcode.com/problems/jump-game-ii/

// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    /** approach: fail due to time limit
     * For each step, create a trie holding all posible reach for that position and its children
     * ie: [2,3,5,1,1,1,1,1] target: index 7
     * index 0 (2 jumps) we can reach: indexes [1,2]
     * index 1 (3 jumps) we can reach: tempQueue = indexes [2,3,4] // shift queue: [2]
     * index 2 (5 jumps) we can reach: tempQueue = indexes [3,4,5,6,7] 7 match target -> return step+1
     */
    if(nums.length === 1) return 0
    // 1. create target variable
    const target = nums.length - 1
    // 2. create a variable to count number os steps
    let steps = 0
    // 3. create a queue and a tempQueue
    let queue = [0]
    let tempQueue = []
    // 4. while queue is not empty, loop over it:
    while(queue.length) {
      // 4.1 get position (queue.shift) and reach = nums[position]
      let position = queue.shift()
      let reach = nums[position]
      // 4.2 loop over all reaches that are posible
      for(let i = reach; i > 0; i--) {
        // 4.2.1 if position + i >= target return step + 1
        if(position + i >= target) return steps + 1
        // 4.2.2 push possible reach to tempQueue
        tempQueue.unshift(position + i)
      }
      // 4.3 when queue is empty, update step, update queue with temp and temp with a empty array
      if(!queue.length) {
        steps++
        queue = [...tempQueue]
        tempQueue = []
      }
    }
};

console.log(jump([2,3,1,1,5,1,5,1,1]))
