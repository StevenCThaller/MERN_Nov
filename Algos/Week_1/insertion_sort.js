/* 
  - Visualization with playing cards (scroll down): https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
  - Array / bar visualization: https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
  - Stable sort, efficient for small data sets or mostly sorted data sets
  Time Complexity
    - Best:     O(n) linear when array is already sorted
    - Average:  O(n^2) quadratic
    - Worst:    O(n^2) quadratic when the array is reverse sorted
  Space: O(1) constant
  - this sort splits the array into two portions (conceptually, not literally)
  - the left portion will become sorted, the right portion (that hasn't been iterated over yet) is unsorted

  // swap steps:
  1. consider the first item as sorted
  2. move to the next item
  4. if item to left of current item is less than current, swap
  5. repeat step 4 until item to left is less than current item
  6. move to next item and repeat
*/

function insertionSort(array){
    if(array.length <= 1) return array;
    // Since a single element is technically already sorted, we'll start at the second index,
    // iterating through to the end of the array
    for(let i = 1; i < array.length; i++){
        // We can't just change i, because it's kind of necessary
        // for moving onto the next element, so we'll create a new
        // variable to keep track of the index as we swap our way
        // down to where the element is to be inserted
        let index = i;

        // Now, for the part where we swap it on down!

        // Basically, we're going to swap to the left as long as
        // the element is less than the array to its left, or it reaches
        // index 0. Because there's nothing to the left of index zero.
        while(index > 0 && array[index] < array[index-1]) {
            // Swap with the element to the left

            let temp = array[index];
            array[index] = array[index-1];
            array[index-1] = temp;

            // array[index] = array[index] + array[index-1];
            // array[index-1] = array[index] - array[index-1];
            // array[index] = array[index] - array[index-1];

            

            // and decrement our index
            index--;
        }
    }

    // Finally, return the sorted array!
    return array;
}