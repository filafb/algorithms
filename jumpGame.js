//source: https://leetcode.com/problems/jump-game-ii/

// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    /** approach:
     * For each step, find the further we can go
     * ie: [2,3,5,1,1,1,1,1] target: index 7
     * index 0 (2 jumps) we can reach: indexes [1,2] reach [3,5] => we pick index 2 / reach 5 / update step++
     * index 2 (5 jumps) we can reach: indexes [3,4,5,6,7] => we return step++
     */
    if(nums.length === 1) return 0
    // 1. create target variable
    const target = nums.length - 1
    // 2. create a variable to count number os steps
    let steps = 0
    // 3. track current position and possible reach
    let position = 0
    let reach = nums[0]
    // 4. loop over all alternatives. while(true is safe since the problem said it always will have a solution)
    while(true) {
      //4.1 track temp position and temp Reach. Here, we are investigating the best scenario (or how further we can move) given the current position and reach
      let tempPosition = 0
      let tempReach = 0
      for(let i = reach; i > 0; i--) {
        // investigate all alternatives. just save the best one
        if(position + i >= target) return steps + 1;
        [tempPosition, tempReach ] = position + i + nums[position + i] > tempReach + tempPosition ? [position + i, nums[position + i] ] : [tempPosition, tempReach]
      }
      // 4.3 when it's done, we update steps (meaning we are moving one level down) and the new position and reach (the further we could go)
      steps++
      position = tempPosition
      reach = tempReach
    }
};

module.exports = jump
