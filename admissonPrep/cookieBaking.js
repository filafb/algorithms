/* return sum of all elements in an array.
  other approach: for loop
*/

function totalFriends(arr) {
  return arr.reduce((acc, cur) => acc + cur,0)

}
