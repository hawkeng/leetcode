
const assert = require("assert");

/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/

/**
 * Time: O(n+m)
 * Space: O(1)
 * @param {Number[]} nums1
 * @param {Number} m - length of sorted numbers in nums1
 * @param {Number[]} nums2
 * @param {Number} n
 * @returns {void} Do not return anything
 */
function merge(nums1, m, nums2, n) {
    if (!nums2.length || n === 0) return;
    if (!nums1.length || m === 0) {
        nums2.forEach((n, i) => nums1[i] = n);
        return;
    }

    let i = m-1;
    let j = n-1;
    let pos = nums1.length-1;
    while (pos >= 0 && j >= 0 && i >= 0) {
        nums1[pos--] = nums2[j] > nums1[i] ? nums2[j--] : nums1[i--];
    }

    if (j >= 0) {
        for (; pos >= 0; pos--) {
            nums1[pos] = nums2[j--];
        }
    }
}

let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
merge(nums1, 3, nums2, 3);
assert.deepEqual(nums1, [1,2,2,3,5,6]);

nums1 = [];
nums2 = [1,2];
merge(nums1, 0, nums2, 2);
assert.deepEqual(nums1, [1,2]);

nums1 = [1,2];
nums2 = [];
merge(nums1, 2, nums2, 0);
assert.deepEqual(nums1, nums1);

nums1 = [0];
nums2 = [1];
merge(nums1, 0, nums2, 1);
assert.deepEqual(nums1, [1]);

nums1 = [2,0];
nums2 = [1];
merge(nums1, 1, nums2, 1);
assert.deepEqual(nums1, [1,2]);

nums1 = [4,5,6,0,0,0];
nums2 = [1,2,3];
merge(nums1, 3, nums2, 3);
assert.deepEqual(nums1, [1,2,3,4,5,6]);

