function shiftedArrSearch(shiftArr, num) {
  const pivot = findPivot(shiftArr);
  // if num is less than the 1st element it means that num can only be in the
  // 2nd half (using pivot as the starting point)
  if (pivot === 0 || num < shiftArr[0]) {
    return binarySearch(shiftArr, pivot, shiftArr.length - 1, num);
  }
  return binarySearch(shiftArr, 0, pivot, num);
}

function findPivot(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    const mid = i + Math.floor((j - i) / 2);
    if (arr[mid - 1] > arr[mid]) {
      // we check if this is where the array shifted
      // if the previous element is greater it means we found the pivot
      return mid;
    } else if (arr[mid] > arr[0]) {
      // if this is not the pivot, we need to determine what half to search
      // which means to determine in what half will the pivot be.
      // If our mid is greater than the first element in the array, it means
      // all numbers between mid and the start are in a sequence (remember the
      // array is sorted), so where the sequence breaks (the pivot) must be in
      // the 2nd half, so we want that one.
      i = mid + 1;
    } else {
      // If on the contrary, mid is lower than arr[0], then the sequence broke 
      // somewhere in the first half, so we want that one.
      j = mid - 1;
    }
  }
  // for when i gets to be greater than j or viceversa which can happen when
  // the array has 0 offset (it's sorted as originally)
  return 0;
}

function binarySearch(arr, i, j, n) {
  // BS algo
  // 1. get the mid
  // 2. if n < mid: search 1st half
  // 3. if n > mid: search 2nd half
  // 4. if n = mid: return mid
  while (i <= j) {
    const mid = i + Math.floor((j - i) / 2);
    if (n < arr[mid]) {
      j = mid - 1;
    } else if (n > arr[mid]) {
      i = mid + 1;
    }
    else {
      return mid;
    }
  }
  return -1;
}
