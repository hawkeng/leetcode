/**
*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

/**
* @param {Number} number of steps
* @param {Number} starting step
* @returns {Number} number of ways to climb
*/
function climbWays(n, s = 0, memo = {}) {
  if (s < n) {
    if (memo[s] === undefined) {
      const res = climbWays(n, s+1, memo) + climbWays(n, s+2, memo);
      memo[s] = res;
      return res;
    } else {
      return memo[s];
    }
  } else if (s === n) {
    return 1;
  } else {
    return 0;
  }
}

const assert = require("assert");
assert.equal(climbWays(2), 2);
assert.equal(climbWays(3), 3);
assert.equal(climbWays(4), 5);
assert.equal(climbWays(5), 8);
