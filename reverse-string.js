
const assert = require("assert"); 

/*
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

 

Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

/**
 * Time: O(log n)
 * Space: O(1)
 * @param {String[]} chars
 * @returns {void} Do not return anything
 */
function reverseString(chars) {
    if (chars.length < 2) return;

    let i = 0;
    let j = chars.length - 1;
    let tmp;
    while (i < j) {
        tmp = chars[i];
        chars[i++] = chars[j];
        chars[j--] = tmp;
    }
}

let chars = ["o", "l", "l", "e", "h"];
reverseString(chars);
assert.deepEqual(chars, ["h", "e", "l", "l", "o"]);

chars = ["1"];
reverseString(chars);
assert.deepEqual(chars, ["1"]);
