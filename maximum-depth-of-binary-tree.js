/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * Time: O(n)
 * Space: O(n)
 * @param {TreeNode} root
 */
function maxDepth(root) {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

const root = new TreeNode(3);
root.left = new TreeNode(9);

root.right = new TreeNode(20);
root.right.right = new TreeNode(7);
root.right.left = new TreeNode(15);

const assert = require("assert");
assert.equal(maxDepth(root), 3);
