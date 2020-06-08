/*
src: https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/
*/

function genomicRangeQuery(S, P, Q) {
  //brute force solution
  const factor = { A: 1, C: 2, G: 3, T: 4 }
  const minImpFactor =[]
  for(let i = 0; i < P.length; i++) {
    const left = P[i]
    const right = Q[i]
    let min = +Infinity
    for(let j = left; j <= right; j++) {
      const currentNucleotide = S[j]
      const nucleotideFactor = factor[currentNucleotide]
      if(nucleotideFactor < min) {
        min = nucleotideFactor
      }
    }
    minImpFactor.push(min)
  }
  return minImpFactor
}

/**
 * 1. loop over S and create a 2-D array with length === S.length + 1 where every index has an array with 4 elements [A,C,G,T] with the acc sum of each Nucleotides. Eg:
 * S = CAGCCTA
 * [[0,0,0,0],[0,1,0,0], [1,1,0,0],[1,1,1,0], [1,2,1,0], [1,3,1,0], [1,3,1,1], [2,3,1,1]] = Time: O(n) -> n size of string
 *
 * 2. For every pair in P and Q, finds the value when the sequence starts and the end value. If they are the same, there was no occurance for that nucleotides. E.g.:
 * P=2 Q=4 // subsequence: GCC
 * Inittial/previous value (index 2) = [1,1,0,0]
 * Final value (index 5) = [1,3,1,0]
 * A = 1-1 = 0 occurance
 * C = 3-1 = 2 occurances
 * G = 1-0 = 1 occurance
 * T = 0-0 = 0 occurance
 * Smaller: C = 2
 * Time: O(4m) => m size of queries
 * Total: O(n+m)
 */

const genomicRangeQueryOp = (S,P,Q) => {
  const minFactors = []
  const memoValues = [[0,0,0,0]]
  const factor = { A: 1, C: 2, G: 3, T: 4 }
  for(let i = 0; i < S.length; i++) {
    const accValues = [...memoValues[i]]
    const position = factor[S[i]] - 1
    accValues[position] = memoValues[i][position] + 1
    memoValues.push(accValues)
  }
  for(let j = 0; j < P.length; j++) {
    const start = memoValues[P[j]]
    const end = memoValues[Q[j] + 1]
    for(let k = 0; k < 4; k++) {
      const currValue = start[k] - end[k]
      if(currValue) {
        minFactors.push(k+1)
        break
      }
    }
  }
  return minFactors
}


module.exports = genomicRangeQueryOp
