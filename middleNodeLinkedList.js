//source: https://leetcode.com/problems/middle-of-the-linked-list/

//Given a non-empty, singly linked list with head node head, return a middle node of linked list.

//If there are two middle nodes, return the second middle node.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//time: O(n) // space: O(n)
var middleNode = function(head) {
    //approach: traverse the LinkedList, counting number of node and saving nodes into an array.
    if(!head) return null
    let size = 0
    let listArray = []
    let currentNode = head
    while(currentNode) {
      size++
      listArray.push(currentNode)
      currentNode = currentNode.next
    }
    let middle = size % 2 === 0 ? size / 2 : Math.floor(size / 2)
    return listArray[middle]
};

module.exports = middleNode
