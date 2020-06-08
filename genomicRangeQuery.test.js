const genomicRangeQueryOp = require("./genomicRangeQuery")

describe("Genomic Range Query", () => {
  test("takes a string as a Genoma representation and perform N queries to find the minimum impact factor, where P and Q are arrays representing the beginning and the end of eadh queries", () => {
    expect(genomicRangeQueryOp("CAGCCTA", [2,5,0],[4,5,6])).toEqual([2,4,1])
  })
})
