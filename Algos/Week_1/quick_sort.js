/* 
    Visualization https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
    Create a function that uses yesterday’s partition to fully sort an array in-place.
    Unstable sort

    Time Complexity
        - Best: O(n log(n)) linearithmic
        - Average: O(n log(n)) linearithmic
        - Worst: O(n^2) quadratic

    Space: O(1) constant
    Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be the last idx
    - later these params will be used to specify a sub section of the array to partition
    Steps:
        - start by partitioning the full array (use the previously built partition algo)
        - then partition the left side of the array (left of the returned partition idx) and the right side (right of the returned partition idx), recursively
*/

const { partition } = require('./partition'); // <- importing our partition function for use with this algorithm
// remember, the partition function takes 3 parameters: the array itself, the left index, and the right index


function quickSort(array, left=0, right=array.length-1){
    // this is our break case AND edge case: 
        // Edge Case:  if the original array being sorted is 0 or 1 elements in length, there's no need to sort.
        // Break Case: If we have recursively called quick sort so many times that we're looking at a sub-array of 1 element,
                        // then there's nothing to partition so just return
    if(left >= right){
        return array;
    }

    const pivIdx = partition(array,left,right); // we want to call the partition function to do 2 things:
                                                // 1. Partition the array
                                                // 2. Give us the index that everything is partitioned around

    quickSort(array, left, pivIdx-1); // then, we want to call quicksort on the portion of the array to the LEFT of the pivot index
    return quickSort(array, pivIdx+1, right);   // and then, the RIGHT side of the pivot index
}


console.log(quickSort([3,2,9,1,5,8,178,23,56,3214,7831,123,99]))