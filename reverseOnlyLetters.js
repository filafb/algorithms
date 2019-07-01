// source: https://leetcode.com/problems/reverse-only-letters/

// Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.


/**
 * time: O(2n) -> O(n)
 * space: O(n)
 */
function reverseOnlyLetters(s) {
  let array = new Array(s.length);
  let left = 0;
  let right = s.length - 1;
  while(left <= right) {
    if(isLetter(s[left])) {
      while(!isLetter(s[right])) {
        array[right] = s[right];
        right--;
      }
      array[left] = s[right];
      array[right] = s[left];
      left++;
      right--;
    } else {
      array[left] = s[left];
      left++;
    }
  }
  return array.join('')
}


function isLetter(l) {
  let letterCharCode = l.charCodeAt(0)
  if(letterCharCode >= 65 && letterCharCode <= 90 || letterCharCode >= 97 && letterCharCode <= 122) {
    return true
  };
  return false
}

module.exports = reverseOnlyLetters
