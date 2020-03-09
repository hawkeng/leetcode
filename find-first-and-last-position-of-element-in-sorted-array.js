/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

/**
 * Time: O(log n)
 * Space: O(1)
 * @param {Number[]} arr
 * @param {Number} target
 * @returns {Number[]} indexes
 */
function searchRange(arr, target) {
  const leftIdx = findIndex(arr, target, 0, true);
  if (leftIdx === arr.length || arr[leftIdx] !== target) {
    return [-1, -1];
  }
  if (leftIdx === arr.length - 1) return [leftIdx, leftIdx];

  const rightIdx = findIndex(arr, target, leftIdx, false);
  return [leftIdx, rightIdx - 1];
}

function findIndex(arr, target, start = 0, leftSearch) {
  let l = start;
  let r = arr.length;
  while (l < r) {
    //let mid = (l + r) / 2; // It may overflow
    let mid = Math.floor(l + (r - l) / 2);
    if (arr[mid] > target || (leftSearch && arr[mid] === target)) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
}

const assert = require("assert");
assert.deepEqual(searchRange([5, 7, 7, 7, 7, 7, 8, 8, 10], 8), [6, 7]);
assert.deepEqual(searchRange([5, 7, 7, 8, 8, 10], 8), [3, 4]);
assert.deepEqual(searchRange([5, 7, 7, 8, 8, 10], 6), [-1, -1]);
assert.deepEqual(searchRange([1, 3, 3, 5, 7, 8, 9, 9, 9, 15], 9), [6, 8]);
assert.deepEqual(searchRange([100, 150, 150, 153], 150), [1, 2]);
assert.deepEqual(searchRange([1, 2, 3, 4, 5, 6, 10], 9), [-1, -1]);
assert.deepEqual(searchRange([1, 1, 2, 9, 10], 9), [3, 3]);
assert.deepEqual(searchRange([1, 1, 2, 9, 9, 10], 10), [5, 5]);
assert.deepEqual(searchRange([1], 1), [0, 0]);
assert.deepEqual(searchRange([2, 2], 2), [0, 1]);
