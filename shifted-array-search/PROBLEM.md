# Shifted Array Search
A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset and you don’t have a pre-shifted copy of it. For instance, the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left.

Given `shiftArr` and an integer `num`, implement a function `shiftedArrSearch` that finds and returns the index of `num` in `shiftArr`. If `num` isn’t in `shiftArr`, return -1. Assume that the offset can be any value between 0 and arr.length - 1.

Explain your solution and analyze its time and space complexities.

## Example
```
input:  shiftArr = [9, 12, 17, 2, 4, 5], num = 2 # shiftArr is the
                                                 # outcome of shifting
                                                 # [2, 4, 5, 9, 12, 17]
                                                 # three times to the left

output: 3 # since it’s the index of 2 in arr
```

## Constraints
- [time limit] 5000ms
- [input] array.integer arr
- [input] integer num
- [output] integer

## Answer

For a shifted array, binary search cannot be straightforwardly applied, since it’s no longer sorted. Instead, what we can do is to choose “smartly” a pivot point where the shifted array will be partitioned precisely into two fully sorted (in an ascending order) sub-arrays. Once done, we apply binary search on the relevant sub-array.

For instance, for the example above, the pivot point is index 3 and two sub-arrays are [9, 12, 17] and [2, 4, 5]. Notice that each array is indeed fully sorted.

So how do we choose a pivot point? Well, the desired pivot point is the index that satisfies the following condition: shiftArr[i-1] > shiftArr[i]. There could be maximum only one such index since the values are distinct and the array was shifted to the left.

To find the pivot point, we could easily scan shiftArr linearly until we find an index that meets the condition above. However, a more efficient way will be to use modified version of binary search. On each step, we check whether the current shiftArr[i] is smaller than its left neighbor. If it is, then we we’ve found our pivot.

Otherwise, we determine what half of the array we need to focus on by comparing shiftArr[mid] to shiftArr[0]. This comparison will tell us if the current mid index is part of the shifted sub-array or the other sub-array.

Once we have found the pivot point and split the array, we can apply binary search only on the relevant sub-array and ignore the other sub-array. The relevant sub-array would satisfy: subArr[0] ≤ num ≤ subArr[n-1].

### Pseudocode
```
function shiftedArrSearch(shiftArr, num):
    pivot = findPivotPoint(shiftArr)

    if(pivot == 0 OR num < shiftArr[0]):
        return binarySearch(shiftArr, pivot, shiftArr.length - 1, num)
    
    return binarySearch(shiftArr, 0, pivot - 1, num)


function findPivotPoint(arr):
    begin = 0
    end = arr.length - 1

    while (begin <= end):
        mid = begin + floor((end - begin)/2)
        if (mid == 0 OR arr[mid] < arr[mid-1]):
            return mid
        if (arr[mid] > arr[0]):
            begin = mid + 1
        else:
            end = mid - 1

    return 0


function binarySearch(arr, begin, end, num):
    while (begin <= end):
        mid = begin + floor((end - begin)/2)
        if (arr[mid] < num):
            begin = mid + 1
        else if (arr[mid] == num):
            return mid
        else:
            end = mid - 1

    return -1
```

### Time Complexity
The time complexity of findPivotPoint is O(log((N)) since it’s essentially a slightly modified version of the binary search algorithm. The time complexity of binarySearch is obviously O(log((N)) as well. The total time complexity is therefore O(log((N)).

### Space Complexity
Throughout the entire algorithm we used only a constant amount of space, hence the space complexity is O(1).
