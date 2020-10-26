/* 
  https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
  Stable sort
  
  Time Complexity
    - Best:     O(n) linear when array is already sorted
    - Average:  O(n^2) quadratic
    - Worst:    O(n^2) quadratic when the array is reverse sorted
  Space: O(1) constant
  For review, create a function that uses BubbleSort to sort an unsorted array in-place.
  For every pair of adjacent indicies, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

function bubbleSort(array){
     // The key part of this sort is that we run it until it's actually
    // sorted. In order to be able to tell that, we need some variable,
    // either numerical or boolean, to keep track. We'll use a boolean in 
    // this instance
    


    // As mentioned previously, we're going to run our little swap session
    // until things are actually sorted, so:
    do {
        // Now, we're going to go into each loop with the assumption that
        // the array is sorted, and change it back to false if we make a swap.
        let sorted = true;

        // Now, we want to start at the 0 index, and "bubble up" to the end

        // NOTE: this for loop stops one BEFORE the last element, since we'll
        // comparing each index to the NEXT index. This will prevent errors
        for(let i = 0; i < array.length - 1; i++){
            // Let's check to see if the number at index i is greater than the
            // number at the next index
            if(array[i] > array[i+1]){
                // If it is, we need to swap sorted back to false
                sorted = false;

                // and swap the elements
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        counter++;
    } while(sorted == false)

    // If we've broken out of the while loop, then it means the array has been sorted!
    return array;
}


do {
  // thing you want to do
}
while(condition)