/*
  Count number of duplicates.
  Brute force:
  - loop all elements, place duplciates in an array. It it's already in the array, don't do that.
*/

function countDuplicates(arr) {
  const memo = {}
  let duplicates = 0
  for(let i = 0; i < arr.length; i++) {
      if(!memo[arr[i]]) {
          memo[arr[i]] = {seen: false, duplicated: false}
      }
      if(memo[arr[i]].seen && !memo[arr[i]].duplicated) {
          duplicates++
          memo[arr[i]].duplicated = true
      }
      memo[arr[i]].seen = true

  }
  return duplicates
}
