/*
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example: 
Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.

Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n)
*/

/**
* @param {Number} s - Target Sum
* @param {Number[]} n
* @return {Number} minimum subarray length which numbers' sum >= s
*/
function min_len(s, n) {
  const N = n.length;
  let tmp = [];
  let m = 0;
  let i = 0;
  let j = 0;
  while (i < N && j < N) {
    tmp = n.slice(i, j + 1);
    if (sum(tmp) >= s) {
      m = tmp.length;
      i++;
    } else if (tmp.length + 1 === m) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  return m;
}

function sum(arr) {
  return arr.reduce((acc, n) => acc + n, 0);
}

const assert = require("assert");
assert.equal(min_len(7, [2,3,1,2,4,3]), 2);
assert.equal(min_len(9, [5,1,2]), 0);
assert.equal(min_len(8, [1,4,2,5,8]), 1);
