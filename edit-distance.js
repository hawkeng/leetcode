/*
Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character

Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
*/

/**
 * @param {String} s1
 * @param {String} s2
 * @returns {Number} Minimum edit distance between both strings
 */
function editDistance(s1, s2) {
  const n = s1.length;
  const m = s2.length;
  const distTbl = [...Array(n+1)]
    .map((_, i) => [...Array(m+1)].map((_, j) => i+j)); 

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s1[i-1] === s2[j-1]) {
        distTbl[i][j] = distTbl[i-1][j-1];
      } else {
        distTbl[i][j] = 1 + Math.min(
          distTbl[i-1][j-1],
          distTbl[i-1][j],
          distTbl[i][j-1]
        );
      }
    }
  }

  return distTbl[n][m];
}

const assert = require("assert");
assert.equal(editDistance("ros", "horse"), 3);
assert.equal(editDistance("biting", "sitting"), 2);
assert.equal(editDistance("biting", "botong"), 2);
assert.equal(editDistance("catch", "wxcar"), 5);
assert.equal(editDistance("biting", "cam"), 6);
