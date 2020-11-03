// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
        - top left to bottom right diagonal
        - top right to bottom left diagonal
*/
function diagonalDifference(matrix){
    let ltrSum = 0, rtlSum = 0; // two variables for calculating and holding onto the sum of each diagonal

    for(let i = 0; i < matrix.length; i++){ // we'll be able to calculate this in one pass through
        ltrSum += matrix[i][i]; // starting at the "top left" and moving down and to the right
        rtlSum += matrix[i][matrix.length-1-i]; // starting at the "top right" and moving down and to the left
    }
    return Math.abs(ltrSum - rtlSum); // calculate the absolute difference and return
}