/**
 * https://leetcode.com/problems/longest-palindromic-substring
 */

/**
 * @param {String} aString
 * @returns {String} Longest palindromic substring
 */
const longestPalindrome = aString => {
  if (!aString || aString.length < 1) return "";

  let longestSoFar = "";
  for (let i = 0, len = aString.length; i < len; i++) {
    const longestSingleCenter = expandAroundCenter(aString, i, i);
    const longestDoubleCenter = expandAroundCenter(aString, i, i + 1);
    const longerResult =
      longestSingleCenter.length > longestDoubleCenter.length
        ? longestSingleCenter
        : longestDoubleCenter;
    if (longerResult.length > longestSoFar.length) {
      longestSoFar = longerResult;
    }
  }

  return longestSoFar;
};

/**
 * Finds the longest palindromic string starting on the specified center
 * @param {String} aString
 * @param {Number} centerStart
 * @param {Number} centerEnd
 * @returns {String} Longest string from center
 */
function expandAroundCenter(aString, centerStart, centerEnd) {
  let L = centerStart;
  let R = centerEnd;
  while (L >= 0 && R < aString.length && aString[L] === aString[R]) {
    L--;
    R++;
  }
  console.log(`EAC s=${centerStart} e=${centerEnd}`);
  console.log(
    `"${aString}".substring(${L} + 1, ${R})=${aString.substring(L + 1, R)}\n`
  );
  return aString.substring(L + 1, R);
}

if (module === require.main) {
  console.log(longestPalindrome(process.argv[2]));
}
