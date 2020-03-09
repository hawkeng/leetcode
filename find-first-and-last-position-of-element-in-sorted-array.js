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
 * @param {Number[]} arr
 * @param {Number} target
 * @returns {Number[]} indexes
 */
function searchRange(arr, target, diff = 0) {
  if (!arr.length) return [-1, -1];

  const idx = Math.floor(arr.length / 2);
  if (arr[idx] === target) {
    return findIndexes(arr, target, diff);
  } else if (arr[idx] < target) {
    return searchRange(arr.slice(idx + 1), target, idx + 1 + diff);
  } else {
    return searchRange(arr.slice(0, idx), target, diff);
  }
}

function findIndexes(arr, target, diff) {
  let firstIdx = -1;
  let lastIdx = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) {
      break;
    } else if (arr[i] === target) {
      if (firstIdx === -1) {
        firstIdx = i + diff;
      } else {
        lastIdx = i + diff;
      }
    }
  }
  if (lastIdx === -1) {
    lastIdx = firstIdx;
  }
  return [firstIdx, lastIdx];
}

const assert = require("assert");
assert.deepEqual(searchRange([5, 7, 7, 7, 7, 7, 8, 8, 10], 8), [6, 7]);
assert.deepEqual(searchRange([5,7,7,8,8,10], 8), [3,4]);
assert.deepEqual(searchRange([5, 7, 7, 8, 8, 10], 6), [-1, -1]);
assert.deepEqual(searchRange([1,3,3,5,7,8,9,9,9,15], 9), [6,8]);
assert.deepEqual(searchRange([100, 150, 150, 153], 150), [1,2]);
assert.deepEqual(searchRange([1,2,3,4,5,6,10], 9), [-1,-1]);
assert.deepEqual(searchRange([1, 1, 2, 9, 10], 9), [3, 3]);
assert.deepEqual(searchRange([1, 1, 2, 9, 9, 10], 10), [5, 5]);
assert.deepEqual(searchRange([1], 1), [0, 0]);

