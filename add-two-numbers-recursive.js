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
function addTwoNumbers(l1, l2, carry=0) {
  l1 = l1 || {};
  l2 = l2 || {};
  let sum = (l1.val || 0) + (l2.val || 0) + carry;
  if (sum >= 10) {
    carry = 1;
    sum = sum % 10;
  } else {
    carry = 0;
  }
  
  const result = new ListNode(sum);

  if (l1.next || l2.next || carry) {
    result.next = addTwoNumbers(l1.next, l2.next, carry);
  }

  return result;
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
