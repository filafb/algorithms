// source: https://leetcode.com/problems/valid-anagram/
//Given two strings s and t , write a function to determine if t is an anagram of s.
//time & space: O(n)
var isAnagram = function(s, t) {
  //0. check length
  if(s.length !== t.length) {
      return false;
  };
  //1. create a map from s
  let sMap = {};
  for ( let i = 0; i < s.length; i++ ){
      if(sMap[s[i]]) {
          sMap[s[i]]++;
      } else {
          sMap[s[i]] = 1;
      };
  };
  //2. loop over t, checking if exist in sMap
  for( let j = 0; j < t.length; j++ ) {
      //if so, reduce one
      if(sMap[t[j]]) {
          sMap[t[j]]--;
          //if the value is zero, delete it from the object
          if(!sMap[t[j]]) {
              delete sMap[t[j]]
          };
          //if t is not in sMap, we know it's not an anagram
      } else {
          return false
      }
  }
  //if t is an anagram, we will have deleted all the keys. Otherwise, it's not
  return !Object.keys(sMap).length
};

module.exports = isAnagram
