/*
  src: https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/

*/

function maxCounters(N,A) {
  const counters = Array(N).fill(0)
  let max = 0
  for(let i = 0; i < A.length; i ++) {
    if(A[i] > 0 && A[i] <= N) {
      counters[A[i]-1] += 1
      if(counters[A[i]-1] > max) {
        max = counters[A[i]-1]
      }
    } else if(A[i] === N + 1){
      counters.fill(max)
    }
  }
  return counters
}

// fails for large inputs
