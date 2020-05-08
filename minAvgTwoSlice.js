/**
 * src: https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
*/

function minAvgTwoSlice(arr) {
  let average = +Infinity
  let index = null
  for(let i = 0; i < arr.length; i++) {
    let currSum = arr[i]
    for(let j = i + 1; j < arr.length; j++) {
      currSum += arr[j]
      let currAvg = currSum / (j-i+1)

      if(currAvg < average) {
        average = currAvg
        index = i
      }
    }
  }
  return index
}

