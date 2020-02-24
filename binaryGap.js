/*
Source = https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

BinaryGap

Find longest sequence of zeros in binary representation of an integer.

*/
function binaryGap(num) {
  const toBinary = num.toString(2)
  let longestSeq = 0
  let currentSeq = 0
  for(let i = 0; i < toBinary.length; i++) {
    if(toBinary[i] === "0") {
      currentSeq++
    } else if (toBinary[i] === "1") {
      if(currentSeq > longestSeq) {
        longestSeq = currentSeq
      }
      currentSeq = 0
    }
  }
  return longestSeq
}

module.exports = binaryGap
