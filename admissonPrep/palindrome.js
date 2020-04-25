/*
  possible approach: loop the string backward, creating a new one and then compare with original
*/

function palindrome(str) {
  let left = 0
  let right = str.length - 1
  while(left < right) {
      if(str[left].toLowerCase() !== str[right].toLowerCase()) {
          return "false"
      }
      left++
      right--
  }
  return "true"
}


function palindromeRec(str, left = 0, right = str.length -1) {
    if(left > right) {
      return "true"
    } else if(str[left].toLowerCase() !== str[right].toLowerCase()) {
      return "false"
    } else {
      return palindromeRec(str, ++left, --right)
    }
}
