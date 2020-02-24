/**
 * Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.

Example 1:

Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.


Constraints:

1 <= text1.length <= 1000
1 <= text2.length <= 1000
The input strings consist of lowercase English characters only.
*/


/**
 * @param {String} s1
 * @param {String} s2
 * @returns {Number} length of longest common subsequence
 */
function LCS(s1, s2) {
  m = s1.length;
  n = s2.length;
  L = [...Array(m+1)].map(() => [...Array(n+1)].fill(null));

  for(let i=0; i <= m; i++) {
    for (let j=0; j <= n; j++) {
      if (i === 0 || j === 0) {
        L[i][j] = 0;
      } else if (s1[i-1] === s2[j-1]) {
      	L[i][j] = L[i-1][j-1] + 1;
      } else {
      	L[i][j] = Math.max(L[i-1][j], L[i][j-1]);
      }
    }
  }

  return L[m][n];
}

const assert = require("assert");
assert.equal(LCS("ABAZDC", "BACBAD"), 4)
assert.equal(LCS("AGGTAB", "GXTXAYB"), 4)
assert.equal(LCS("aaaa", "aa"), 2)
assert.equal(LCS("abc", "def"), 0)
assert.equal(LCS("abc", "abc"), 3)
