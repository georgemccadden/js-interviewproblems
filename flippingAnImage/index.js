// Problem Domain :

// Given a binary matrix 'matrix', flip the image horizontally, then invert it, and return the resulting image. To flip an image horizontally means that each row of the image is reversed. For example, flipping [1, 1, 0] horizontally results in [0, 1, 1]. To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].


// Example :

// Input - [[1, 0, 0, 1, 1, 0], [1, 1, 1 , 0, 1, 1], [0, 0, 1, 1, 0, 0]]
// Output - [[1, 0, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0], [1, 1, 0, 0, 1, 1]]


// Algorithm :

// - Reverse the passed in matrix/array
// - Check if each item in the matrix/array is a 1 or a 0, swap them for each other.
// - Return the mutated array.


// C O D E :

var flipAndInvertImage = function(A) {
    
    // Reverse the array
    let temp;
    
    for (let i = 0; i < A.length; i++) {
        for (let k = 0; k < A[i].length / 2; k++) {
            temp = A[i][k];
            A[i][k] = A[i][A[i].length - 1 - k];
            A[i][A[i].length - 1 - k] = temp;     
        }
        for (let k = 0; k < A[i].length; k++) {
            if (A[i][k] === 1) {
                A[i][k] = 0;
            } else if (A[i][k] === 0) {
                A[i][k] = 1;
            }
        }
    }
    return A;
};