//source: https://leetcode.com/problems/zigzag-conversion/
//The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows and then read line by line: "PAHNAPLSIIGYIR"
//Write the code that will take a string and make this conversion given a number of rows:
/* Zig Zag pattern:
n=numRows

Δ=2n-2    1                           2n-1                         4n-3
Δ=        2                     2n-2  2n                    4n-4   4n-2
Δ=        3               2n-3        2n+1              4n-5       .
Δ=        .           .               .               .            .
Δ=        .       n+2                 .           3n               .
Δ=        n-1 n+1                     3n-3    3n-1                 5n-5
Δ=2n-2    n                           3n-2                         5n-4
*/

//Time: O(n) // Space:O(n) // space can done with O(1)
function convert(s, numRows) {
  let placeHolderArray = new Array(numRows);
  for(let i = 0; i < placeHolderArray.length; i++) {
    placeHolderArray[i] = [];
  };
  let finalS = '';
  let i = 0;
  while (i < s.length) {
    for(let index = 0; index < numRows && i < s.length; index++) {
      placeHolderArray[index] += s[i++]
    }
    for(let index = numRows - 2; index >= 1 && i < s.length; index--){
      placeHolderArray[index] += s[i++]
    }
  }
  placeHolderArray.forEach(row => {
    finalS += row
  })
  return finalS
}

module.exports = convert
