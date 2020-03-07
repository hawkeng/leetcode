/*
Hi, here's your problem today. This problem was recently asked by Google:

There are n people lined up, and each have a height represented as an integer. A murder has happened right in front of them, and only people who are taller than everyone in front of them are able to see what has happened. How many witnesses are there?

Example:
Input: [3, 6, 3, 4, 1]  
Output: 3
Explanation: Only [6, 4, 1] were able to see in front of them.
 #
 #
 # #
####
####
#####
36341                                 x (murder scene)
*/

/**
 * Time: O(n)
 * Space: O(n)
 * @param {Number[]} heights
 * @returns {Number[]}
 */
function witnesses(heights) {
  if (heights.length < 2) return heights;

  let tallest = 0;
  let result = [];
  for (let i = heights.length-1; i >= 0; i--) {
    if (heights[i] > tallest) {
      tallest = heights[i];
      result.unshift(tallest);
    }
  }

  return result;
}

const assert = require("assert");
assert.deepEqual(witnesses([3,6,3,4,1]), [6,4,1]);
assert.deepEqual(witnesses([3]), [3]);
assert.deepEqual(witnesses([7,1,5,8,3,4,1]), [8,4,1]);
