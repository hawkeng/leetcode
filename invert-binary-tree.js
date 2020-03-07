/*
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.right = this.left = null;
  }
}

/**
 * Time: O(n)
 * Space: O(n) bc of call stack (recursive)
 * @param {TreeNode} root
 * @returns {TreeNode}
 */
function invertTree(root) {
  if (root === null) return null;

  const tmp = root.right;
  root.right = root.left;
  root.left = tmp;
  if (root.left !== null) invertTree(root.left);
  if (root.right !== null) invertTree(root.right);

  return root;
}

function printTree(root) {
  if (root === null) return;

  printTree(root.left);
  console.log(root.val);
  printTree(root.right);
}

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

root.right = new TreeNode(7);
root.right.right = new TreeNode(9);
root.right.left = new TreeNode(6);

printTree(root);
console.log("")
printTree(invertTree(root));
