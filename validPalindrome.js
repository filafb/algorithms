//source https://leetcode.com/problems/valid-palindrome-ii/submissions/
//Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  // //1. create two pointer left and right
  // let right = s.length - 1;
  // let left = 0;
  // //2. track # of char deleted
  // let deleted = 0;
  // let firstAttempt = true;
  // let holdLeft, holdRight
  // //3. Loop over string, checking chars at left and right positions
  // let sLeft
  // let sRight
  // while(right > left) {
  //   //3.1 if being equals, move pointers
  //   sLeft = s[left]
  //   sRight = s[right]
  //   if( s[left] === s[right] ) {
  //     right--;
  //     left++;
  //     continue
  //   }
  //   //3.2 if not, check if they are neighbors, meaning we reach the middle. If not equal, but neighbors and deleted = 0 return true.
  //   else if(left + 1 === right) {
  //     if(deleted === 0) {
  //       return true;
  //     } else {
  //       return false
  //     }
  //   }
  //   //if not, check for equality two char ahead, both directions. If equals, move pointers, but increase deleted
  //   else if(s[left + 1] === s[right]) {
  //     holdLeft = left;
  //     holdRight = right-1;
  //     left++;
  //   }
  //   else if(s[left] === s[right -1]) {
  //     holdLeft = left+1;
  //     holdRight = right;
  //     right--;
  //   }
  //   deleted++
  //   if (deleted > 1) {
  //     if(firstAttempt) {
  //       right = holdRight
  //       left = holdLeft
  //       deleted = 1
  //       firstAttempt = false
  //     } else{
  //       return false
  //     }
  //   }
  // }
  // return true
};



module.exports = validPalindrome
