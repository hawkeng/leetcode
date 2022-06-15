// array is sorted but was shifted to the left by unknown offset
// find index of given number
// if number is not present return -1
// offset can be 0 <= offset <= N - 1

// naive solution is O(n)
//   loop through arr, when arr[i] = n return i

// can we do O(log n)?

function shiftedArrSearch(shiftArr, num) {
  let idx = 0;
  let inverted = shiftArr[0] > num;
  for (let i = 0, len = shiftArr.length; i < len; i++) {
    idx = inverted ? (len - 1 - i) : i;
    if (shiftArr[idx] === num) return idx;
  }
  return -1;
}

function shiftedArrSearch(shiftArr, num) {
  for (let i = 0, len = shiftArr.length; i < len; i++) {
    if (shiftArr[i] === num) return i;
  }
  return -1;
}

// [17,2,4,5,9,12]

