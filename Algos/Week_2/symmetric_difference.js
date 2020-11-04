/*
    Given two arrays of ints
    return the symmetric differences, (aka disjunctive union)
        - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
        think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
        - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
    Venn Diagram Visualization: https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/
function symmetricDifference(array1, array2) {
    const log1 = {}; // this is how we'll keep track of what's in each array
    const log2 = {};
    const output = []; // and our output

    // Let's loop through each array and populate our log dictionaries
    for(let i = 0; i < array1.length; i++){
        log1[array1[i]] = true;
    }
    for(let i = 0; i < array2.length; i++){
        log2[array2[i]] = true;
    }
    let i1 = 0, i2 = 0;
    // Now, loop through each array, checking each value against our logs (and the last thing added to avoid dupes)
    while(i1 < array1.length && i2 < array2.length){
        if(array1[i1] < array2[i2]){ // To keep output sorted, we'll check which is smaller
            // if the element in array1 is smaller
            if(!log2[array1[i1]] && output[output.length-1] != array1[i1]){ // if the element isn't already in the output array and it's not in the other array
                output.push(array1[i1]); // add it to the output
            }
            i1++; // increment i1
        } else if(array2[i2] < array1[i1]){ // for sorting purposes
            if(!log1[array2[i2]] && output[output.length-1] != array2[i2]){ // if the element isn't already in the output array and it's not in the other array
                output.push(array2[i2]); // add it to the output
            }
            i2++; // increment i2
        } else { // otherwise, element in array 1 is the same as the element in array 2, which doesn't work with the whole difference thing
            i1++;// increment both
            i2++;// i1 and i2
        }
    }
    
    while(i1 < array1.length){
        if(output[output.length-1] != array1[i1] && !log2[array1[i1]]){
            output.push(array1[i1]);
        }
        i1++;
    }

    while(i2 < array2.length){
        if(output[output.length-1] != array2[i2] && !log1[array2[i2]]){
            output.push(array2[i2]);
        }
        i2++;
    }

    return output; // and return the output!
}
