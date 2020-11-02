/* 
    http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140
    Stable sort
    Visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
    - Best case:    O(n log(n)) linearithmic
    - Average case: O(n log(n)) linearithmic
    - Worst case:   O(n log(n)) linearithmic
    Space: O(n) linear
*/

//  steps:
//    1. create a merge function to merge two already sorted arrays into a single sorted array
//      - you do NOT need to work in place, ok to use a new array
function merge(arr1, arr2){
    let i1 = 0; // to index through arr1
    let i2 = 0; // to index through arr2
    let merged = []; // our output array

    while(i1 < arr1.length && i2 < arr2.length){ // we'll push through until i1 or i2 reach the end of their respective array
        if(arr1[i1] < arr2[i2]){ // if the element in arr1 is smaller than arr2 it should be in the merged array first
            merged.push(arr1[i1]); // add it to the merged array
            i1++; // and increment i2
        } else { // otherwise, the element in arr2 is smaller and thus needs to be pushed in first
            merged.push(arr2[i2]); // so push it in
            i2++; // and increment i2
        }
    }

    while(i1 < arr1.length){ // if there are any elements left in arr1 after arr2 finishes, let's push them into the end of the merged array
        merged.push(arr1[i1]);
        i1++;
    }
    while(i2 < arr2.length){ // same thing as above, but in case arr1 finished first
        merged.push(arr2[i2]);
        i2++;
    }

    return merged; // now our arrays are merged into 1 sorted array!
}


//    2. create mergeSort function to sort the provided array
//      - split the array in half and recursively merge the halves using the previously created merge function
//      - splitting of arrays stops when array can no longer be split
//      - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array
function mergeSort(array){
    if(array.length <= 1){ // an array with a length of (or less than) 1 is already sorted
        return array; // so return the array
    }
    // Recursively split the array in half
    let leftHalf = mergeSort(array.slice(0, array.length/2));
    let rightHalf = mergeSort(array.slice(array.length/2));

    return merge(leftHalf, rightHalf); // and merge them together
}