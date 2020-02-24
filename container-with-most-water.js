/**
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Example:
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
*/

/**
 * Time complexity O(n^2)
 * Space complexity O(1)
 * @param {number[]} N
 * @return {number}
 */
function maxArea(N) {
  let A = 0;
  const n = N.length;
  for (let i=0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
      const h = Math.min(N[i], N[j]);
      const w = j - i;
      const a = h * w;
      if (A < a) {
      	A = a;
      }
    }
  }

  return A;
}

const assert = require("assert");
assert.equal(maxArea([1,8,6,2,5,4,8,3,7]), 49);
assert.equal(maxArea([3,9,3,4,7,2,12,6]), 45);
