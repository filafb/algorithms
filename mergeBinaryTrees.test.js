const mergeTrees = require('./mergeBinaryTrees');

const t1 = {
  val: 1,
  right:
    { val: 2, right: null, left: null },
  left:
  {
    val: 3, right: null,
    left: { val: 5, right: null, left: null }
  }
}

const t2 = {
  val: 2,
  right:
  {
    val: 3,
    right: { val: 7, right: null, left: null },
    left: null
  },
  left:
  {
    val: 1,
    right: { val: 4, right: null, left: null },
    left: null
  }
}

const t3 = {
  val: 3,
  left:
  {
  val: 4,
  left: { val: 5, right: null, left: null },
  right: { val: 4, right: null, left: null } },
  right:
  {
  val: 5,
  left: null,
  right: { val: 7, right: null, left: null } } }


describe('Merge tree', () => {
  it('combines two different trees. If two nodes overlap, then sum node values up as the new value. Otherwise the not null node will be used as value', () => {
    expect(mergeTrees(t1,t2)).toEqual(t3)
  })
})


