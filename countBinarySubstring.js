//source: https://leetcode.com/problems/count-binary-substrings/
//Give a string s, count the number of non-empty (contiguous) substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

//Substrings that occur multiple times are counted the number of times they occur.

//Brute fore -> time 0(n^2) space 0(1)
// var countBinarySubstrings = function(s) {
//   let finalCount = 0;
//   for ( let i = 0; i < s.length -1; i++ ) {
//     let current = s[i];
//     let accumulator = 1;
//     let sameSequence = true
//     for ( let j = i+1; j < s.length; j++ ) {
//       if(current === s[j]) accumulator++;
//       else {
//         if(!accumulator) {
//           finalCount++;
//           break
//         }
//         accumulator--;
//         sameSequence = false
//       }
//       if (!sameSequence && s[j+1] === current || j+1 === s.length) {
//         if(!accumulator) finalCount++
//         break
//       }
//     }
//   }
//   return finalCount
// };

//Time O(n) Space )(1)
var countBinarySubstrings = function (s) {
  //1. Var to final result
  let finalCount = 0;
  //2. track the current sequence and the previous sequence we are seeing for the current position
  let currentSequence = 1;
  let previousSequence = 0;
  //3. loop over the input
  for (let i = 1; i < s.length; i++) {
    //3.1 if the current one is equal the previous one, add one to the current sequence
    if (s[i] === s[i - 1]) {
      currentSequence++;
    } else {
      //3.2 if they are different, it means we change from 0 to 1 or the other way around.
      previousSequence = currentSequence;
      // we track ony the previous sequence and the current one.
      currentSequence = 1;
    }
    //While the current sequence is lower or equal to previous, it means we have the same number of the current tracked char for the other one in the previous sequence. Eg. 110 (the previous sequence is 2 and the current is 0. It means we have at least one substring 10). If the next one is 0 (1100) the previous sequence is 2 and the current is 2, also satisfying our contidion. Next one is also 0, (11000), now current one is 3, and it does not satisfy our condition
    if (currentSequence <= previousSequence) {
      finalCount++
    }
  }
  return finalCount
};


module.exports = countBinarySubstrings
