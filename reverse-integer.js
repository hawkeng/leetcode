/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321

Example 2:

Input: -123
Output: -321

Example 3:

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {Number} input
 * @returns {Number} reversed integer
 */
function reverse(input) {
  const MIN_INT = (-2) ** 31;
  const MAX_INT = 2 ** 31 - 1;
  
  let rev = 0;
  // Let's not use Math.abs as it could overflow when n = -2^31
  while(input != 0) {
    const digit = input % 10;
      
    if (rev > MAX_INT/10 || (rev === MAX_INT/10 && digit > 7)) return 0;
    if (rev < MIN_INT/10 || (rev === MIN_INT/10 && digit < -8)) return 0;
      
    rev = rev * 10 + digit;
    input = parseInt(input / 10, 10);
  }
    
  return rev;
}
