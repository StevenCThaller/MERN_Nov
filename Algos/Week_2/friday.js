/*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    Bonus: Make it O(n) time
*/
function twoSum(array, target) {
    let values = {};

    for(let i = 0; i < array.length; i++) {
        if(values[target - array[i]] !== undefined) {
            return [i, values[target-array[i]]];
        }
        values[array[i]] = i;
    }
    return [];
}

/* 
    Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
    You can assume there is always a valid solution
    These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
    Hard Bonus: make it O(n) time
*/
function kMostFrequent(array, k){
    const output = [];
    const freqTable = {};
    let maxFreq = 0;

    for(let num of array) {
        if(freqTable[num] !== undefined) {
            freqTable[num]++;

        } else {
            freqTable[num] = 1;
        }
        if(freqTable[num] > maxFreq) maxFreq = freqTable[num];
    }

    const freqTableReverse = {};
    for(let key in freqTable) {
        if(freqTableReverse[freqTable[key]] !== undefined){
            freqTableReverse[freqTable[key]].push(parseInt(key));
        } else {
            freqTableReverse[freqTable[key]] = [parseInt(key)];
        }
    }
    
    

    while(output.length < k && maxFreq > 0){
        if(freqTableReverse[maxFreq] !== undefined && freqTableReverse[maxFreq].length > 0){
            output.push(freqTableReverse[maxFreq].pop());
        } else {
            maxFreq--;
        }
    }

    return output;
}

