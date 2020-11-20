/* 
    Given a string, containing letters, single digit ints, and question marks
    return whether or not there are exactly 3 question marks between EVERY two ints that add up to 10
        - if there are no two ints that add up to 10, return false
    Helpful functions:
        parseInt(char) => NaN or the string parsed to an int
        isNaN(x) => true or false
            - need to use isNaN if you want to know if something is NaN
            - the number 0 is falsy
            - NaN is falsy
    
    EXAMPLE:
    questionMarks("acc?7??sss?3rr1??????5") will return true, because there are 3 question marks between 7 and 3

    questionMarks("aa2?1??aalkg") will return false, because there are not 3 question marks between 2 and 1

    questionMarks("aot4?ab?xyz6lkajhsglh???23??") will return false because 4 and 6 DO add up to 10, but there are not 3 question marks between them
*/

function questionMarks(string){
    let prevInt = 0; // for keeping track of a previous number
    let qMarkCnt = 0; // for keeping count of the number of question marks between any 2 numbers
    let sumTenExists = false; // to know if there is, in fact, a sum of 10

    for (let i = 0; i < string.length; i++) { // loop through the length of the string
        if (string[i] === "?") { // if the character we're at is a question mark, add it to the counter
            ++qMarkCnt;
        } else { 
            const parsed = parseInt(string[i]); // we'll check this character to see if it's a number or not

            // not not a number means it's a number
            if (!isNaN(parsed)) { // if the character is a number
                if (prevInt + parsed === 10) { // check to see if the number plus the last number encountered equals 10
                    sumTenExists = true; // if so, toggle sumTenExists to true

                    if (qMarkCnt !== 3) { // BUT, if we haven't counted 3 question marks since that number, then return false
                        return false;
                    }
                } else { // otherwise, reset everything.
                    prevInt = parsed;
                    qMarkCnt = 0;
                }
            }
        }
    }
    return sumTenExists; // if we finish going through everything and sumTenExists is still true, return true, otherwise false
}