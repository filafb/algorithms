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

console.log(genomicRangeQuery("CAGCCTA", [2,5,0],[4,5,6]))
