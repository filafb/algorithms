//source https://leetcode.com/problems/valid-palindrome-ii/submissions/
//Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, l = 0, r = s.length -1, skipped = []) {
  //keep evaluating palindrome untill it is not.
  while(l < r) {
    if(s[l] === s[r]) {
      l++
      r--
    } else {
      //this queue helps us tracking where l and r were the first time we skipped. This way, we can use to back track the second evaluation.
      //For the first evaluation, it will push to max of 4 and will return false (if skipped more than once)
      //for the second, it will start with 4 elements, but the evaluation will shift two. So, we are able to run the function skipping one from the right. If we don't need to skip anyone more, we will never push again to it and it will return true
      skipped.push(l,r)
      if(skipped.length > 2) return false
      return validPalindrome(s, ++l, r, skipped)|| validPalindrome(s, skipped.shift(),skipped.shift() - 1, skipped)
    }
  }
  return true
};


module.exports = validPalindrome
