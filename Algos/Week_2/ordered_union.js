/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.
    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/
function orderedUnion(array1, array2){
    let i1 = 0, i2 = 0; // keep track of our iterators through each array
    const ordered = []; // our output

    while (i1 < array1.length && i2 < array2.length) { // iterating through both arrays simultaneously

        if (array1[i1] === array2[i2]) { // if the element we're looking at is the same in both arrays
            ordered.push(array1[i1]); // add it
            i1++; // and increment both iterators
            i2++;
        } else if (array1[i1] < array2[i2]) { // otherwise, if the element in array1 is smaller
            ordered.push(array1[i1]); // add it
            i1++; // and increment i1
        } else {
            ordered.push(array2[i2]); // otherwise, the element in array 2 is smaller so it's pushed
            i2++; // and i2 is incremented
        }
    }

    return ordered.concat(array1.slice(i1)).concat(array2.slice(i2)); // arrays might be different lengths, if any elems are remaining, concat them
}
