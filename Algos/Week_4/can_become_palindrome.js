/* 
    Given a string
    return whether or not it's possible to make a palindrome out of the string's characters

    What is it about a string that makes it possible for it to be a palindrome?
*/

function canBecomePalindrome(string){
    if (str.length === 0) { // if the string is empty it can't be a palindrome
        return false;
    }

    const freqTable = {}; // this is going to keep track of how many times a character appears

    for (const char of str) { // we want to go through the string and populate the frequency table
        if(freqTable.hasOwnProperty(char)){ // if it's in the frequency table, increment the count
            freqTable[char]++;
        } else { // otherwise set it to one
            freqTable[char] = 1;
        }
    }

    // now, the trick to determining if the string can become a palindrome is that
    // only 1 character can appear an odd number of times
    let oddCount = 0; // keeping track of how many characters show up an odd number of times

    for(const key in freqTable){ // loop through the frequency table
        if(freqTable[key] % 2 == 1){ // and if the character count is odd, increment oddcount
            oddCount++;
        }

        if(oddCount > 1){ // if oddCount is greater than one, it can't be a palindrome
            return false;
        }
    }

    return true; // if we made it out, it can be a palindrome!
}