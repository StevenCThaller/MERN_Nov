/* 
    Params: array, left, right
        - left and right are indexes, for now, left will be 0, and right will be the last idx
        - later these params will be used to specify a sub section of the array to partition
        
    Steps:

        1. Pick an number out of the arr to be your pivot value
            - usually the middle idx

        2. Partition the array IN PLACE such that all values less than the pivot value are to the left of it
        and all values greater than the pivot value are to the right (not perfectly sorted)

        3. return: new idx of the pivot value or the index where the left section of smaller items ends

    "Choosing a random pivot minimizes the chance that you will encounter worst-case O(n2) performance (always choosing 
    first or last would cause worst-case performance for nearly-sorted or nearly-reverse-sorted data). Choosing the middle 
    element would also be acceptable in the majority of cases." https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

// Hoare's Partition algorithm
function partition(array, left=0, right=array.length-1){
    const pivIdx = Math.floor(Math.random()*((right-left))) + left;
    const pivotVal = array[pivIdx];

    // The general idea of Hoare's partition algorithm is to have 2 indexes, a left and a right,
    // close in on each other, and swapping the relevant pieces along the way.

    while (left < right) { // as long as the left index is still less than the right index, they haven't closed in on each other yet
        while (array[left] < pivotVal) { // basically, we know what our pivot value is, so we want to
            left++;                      // keep incrementing our left index until its value should be on 
        }                                // the other side of the pivot
        
        while (array[right] > pivotVal) { // and the same thing as before, but with the right side
            right--;
        }

        // once we've found 2 values that are on the "wrong side", we swap them
        
        [array[left], array[right]] = [array[right], array[left]]; // array destructure swap syntax
    }
    return left; // finally, by the time our left and right have closed in on each other,
                 // our left index will be at our pivot value
}


module.exports = {
    partition
};