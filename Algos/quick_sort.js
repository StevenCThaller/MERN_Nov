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

}