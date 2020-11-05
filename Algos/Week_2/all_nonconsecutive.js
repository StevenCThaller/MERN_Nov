/* 
    Given an array of ints, find all the non-consecutive integers
    A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
    The first element is never considered non-consecutive.
    Return an array of objects where each object contains the number itself
    and it's index.
*/
function nonConsecutive(array){
    const output = []; // our output array. duh.

    for (let i = 1; i < array.length; i++) { // loop through the entire array (starting at index 1, since the first number doesn't count)
        if (array[i-1] + 1 !== array[i]) { // if the current number isn't the previous number + 1
            output.push({ // push the object into our output
                i: i,
                n: array[i],
            });
        } 
    }
    return output; // return it!
}


// nonConsecutive([1,3,4,5,7,8,9,11,14]) should return 
// [   { i: 1, n: 3 }, 
//     { i: 4, n: 7 }, 
//     { i: 7, n: 11 }, 
//     { i: 8, n: 14 } ]