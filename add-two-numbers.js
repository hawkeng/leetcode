/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

class ListNode {
  constructor(n) {
    this.val = n;
    this.next = null;
  }
}

/**
 * Time: O(n)
 * Space: O(n)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @param {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let carry = 0;
  let startNode = null;
  let curNode = null;
  let n1, n2;
  while (l1 || l2) {
    n1 = l1 ? l1.val : 0;
    n2 = l2 ? l2.val : 0;
    let sum = n1 + n2 + carry;
    if (sum >= 10) {
      carry = 1;
      sum = sum % 10;
    } else {
      carry = 0;
    }

    if (startNode === null) {
      startNode = new ListNode(sum);
      curNode = startNode;
    }
    else {
      curNode.next = new ListNode(sum);
      curNode = curNode.next;
    }

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  if (carry) {
    curNode.next = new ListNode(1);
  } 

  return startNode;
}

function printList(list) {
  while (list) {
    console.log(list.val);
    list = list.next;
  }
}


l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
printList(addTwoNumbers(l1, l2));
