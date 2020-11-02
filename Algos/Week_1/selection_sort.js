/* 
  https://visualgo.net/en/sorting
    
  Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list. Then, ignoring the first position, which is now sorted, iterate through the list again to find the next minimum value and move it to index 1. This continues until all values are sorted.
  Unstable sort
  
  Time Complexity
    - Best:     O(n^2) quadratic
    - Average:  O(n^2) quadratic
    - Worst:    O(n^2) quadratic
  Space: O(1) constant
  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example, you run selection sort for 10 iterations only to display the first 10 sorted items
*/

function selectionSort(array){
    // The jist of selection sort is this:
    // We want to find the smallest element and move it to the first index,
    // then find the second smallest element and move it to the second index, etc. etc.

    // So, our outer for loop will run through the full array
    for(let start = 0; i < array.length; start++){
      // Now, given we want to find the smallest element, we'll
      // start by labeling our element at index 0 as the smallest
      let min = start;

      // But, unless we loop through to find the REAL smallest value,
      // we'll be stuck assuming index 0 is our smallest element.
      for(let i = start; i < array.length; i++){
          // At each index, we'll check to see if that element
          // is smaller than our previously deemed min number
          if(array[min] > array[i]){
              // If it is, let's set min to be that index
              min = i;                
          }
      }

      // After looping through from 0 to our next smallest index,
      // we'll swap that min value with the start index
      let temp = array[min];
      array[min] = array[end];
      array[end] = temp;
  }

  // And finally, return the array
  return array;
}