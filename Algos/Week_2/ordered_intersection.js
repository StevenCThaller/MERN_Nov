/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.
    Output: only the shared values between the two arrays (deduped).
    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

function orderedIntersection(array1, array2){
    let i1 = 0; // for iterating through array1
    let i2 = 0; // for iterating through array2

    const ordered = []; // to store our ordered intersection into

    while(i1 < array1.length && i2 < array2.length){ // until we've gone through everything in both arrays
        if(array1[i1] === array2[i2]){ // check to see if the values are the same
            if(ordered[ordered.length-1] !== array1[i1]){ // and if the value hasn't already been added
                ordered.push(array1[i1]); // add it to the output array
            }
            i1++; // iterate both
            i2++; // iterators
        } else if(array1[i1] < array2[i2]){ // if we find that the element we're looking at in array 1 is smaller than the element
            i1++; // we're looking at in array 2, increment i1 by 1
        } else {
            i2++; // otherwise increment i2 by 1
        }
    }

    return ordered;
}