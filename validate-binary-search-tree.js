
const assert = require("assert");

/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * @param {TreeNode} root
 */
function isValidBST(root, min=Number.MIN_SAFE_INTEGER, max=Number.MAX_SAFE_INTEGER) {
  if (root === null) return true;
  if (root.val <= min || root.val >= max) return false;
  return (isValidBST(root.left, min, root.val) 
    && isValidBST(root.right, root.val, max));
}



let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
assert.equal(isValidBST(root), true);

root = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(6);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(7);
assert.equal(isValidBST(root), false);

root = new TreeNode(1);
root.left = new TreeNode(1);
assert.equal(isValidBST(root), false);
