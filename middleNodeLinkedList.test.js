const middleNode = require('./middleNodeLinkedList')

function ListNode(val) {
  this. val = val;
  this.next = null
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
const node5 = new ListNode(5)
const node6 = new ListNode(6)
const node7 = new ListNode(7)
const node8 = new ListNode(8)
const node9 = new ListNode(9)

node4.next = node5
node3.next = node4
node2.next = node3
node1.next = node2

node8.next = node9
node7.next = node8
node6.next = node7


describe('MiddleNode', () => {
  test('returns the node in the middle of a linked list', () => {
    expect(middleNode(node1)).toEqual(node3)
    expect(middleNode(node6)).toEqual(node8)
    node5.next = node6
    expect(middleNode(node1)).toEqual(node5)

  })
})
