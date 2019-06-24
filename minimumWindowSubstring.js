/* eslint-disable complexity */
//source: https://leetcode.com/problems/minimum-window-substring/submissions/

//Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

//time: O(s * t) t = number of unique char in t //space: O(t)
/**
 * make time O(s + t) = slide window.
 * Make a left and right pointer
 * right pointer moves until we reach deserible window.
 * Then, we start moving left window. if we still have a desirable window, replace. if not, move left to right, update the tMap.
 */

function minWindowOp(s,t) {
  if(t.length === 1){
    return s.includes(t) ? t : ""
  }
  if(t.length > s.length || !t) return ""
  let indexes = [ 0, +Infinity];
  let left = 0;
  let right = 0;
  let tMap = {};
  let tNumChar = 0;
  for(let i = 0; i < t.length; i++) {
    if(tMap[t[i]]) {
      tMap[t[i]]++
    } else {
      tMap[t[i]] = 1;
      tNumChar++;
    }
  }
  while(left <= (s.length - t.length) && right < s.length) {
    if(typeof tMap[s[right]] !== 'undefined') {
      tMap[s[right]]--
      tNumChar = tMap[s[right]] === 0 ? --tNumChar : tNumChar
    }
    if(tMap[s[right]] < 1) {
      while(tNumChar === 0 && left < right) {
        indexes = right - left < indexes[1] - indexes[0] ? [left, right] : indexes;
        if(typeof tMap[s[left]] !== 'undefined') {
          tMap[s[left]]++;
          tNumChar = tMap[s[left]] < 1 ? tNumChar : ++tNumChar
        }
        left++;
      }
    }
    right++;
  }
  return indexes[1] === +Infinity ? "" : s.substring(indexes[0], indexes[1]+1)
}

function minWindow(s,t) {
  if(t.length === 1){
    return s.includes(t) ? t : ""
  }
  if(t.length > s.length) return ""
  //1. create a tMap, holding # of chars and indexes, empty array
  let tMap = {};
  for(let i = 0; i < t.length; i++) {
    if(tMap[t[i]]) {
      tMap[t[i]].count++
    } else {
      tMap[t[i]] = {}
      tMap[t[i]].count = 1;
      tMap[t[i]].indexes = [];
    }
  }
  let queue =[];
  let substring = '';
  //2. Loop over S, looking for matchs on t
  for(let j = 0; j < s.length; j++){
    //3. when find it, update the count on tMap for that key, and save the index, both in the main queue and in the key
    if(tMap[s[j]]) {
      tMap[s[j]].count--
      tMap[s[j]].indexes.push(j);
      queue.push(j)
      //3.1 If after count === 0 after being updated, have to check if all other elements on T are zero. If so, we found a possible substring
      if(tMap[s[j]].count === 0) {
        let z = 0;
        let sum = 0;
        while(!sum && z < t.length) {
          if(tMap[t[z++]].count) {
            sum++
          }
        }
        if(sum === 0) {
          //3.1.1 If any has count > 0; we can interrupt the loop.
          //But if all is zero, we found one.
          let left = queue.shift();
          let right = queue[queue.length - 1];
          let possibleSubstring = s.substring(left, right+1)
          substring = substring && substring.length < possibleSubstring.length ? substring : possibleSubstring
          //We remove the first element from the queue, and add it back to map
          tMap[s[left]].count++;
          tMap[s[left]].indexes.shift();
        };
      }
      else if(tMap[s[j]].count === -1) {
        tMap[s[j]].count = 0;
        let removeFromQueue = tMap[s[j]].indexes.shift();
        let indexInQeue = queue.indexOf(removeFromQueue);
        queue.splice(indexInQeue, 1)
      }
    }
  }
  return substring
}

module.exports = minWindowOp
