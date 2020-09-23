// Problem Domain :

// Given a 6 x 6 2D array 'arr', there are 16 hourglasses inside. An hourglass is a subset of values like :

// a b c
//   d
// e f g

// An hourglass' sum is the sum of its values. Calculate the hourglass sum of every hourglass in 'arr', then print the maximum hourglass sum.


// Example :

// * Input *          * Output *        = * Maximum Hourglass * 
// 1 1 1 0 0 0            19                     2 4 4
// 0 1 0 0 0 0                                     2
// 1 1 1 0 0 0                                   1 2 4
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0


// Algorithm :

// - Create an object to hold the hourglass values in
// - Validate the passed in arr of hourglasses
// - Establish the traversal of the array based on hourglass shape
// - Sum the values of the hourglasses and save them in your object
// - Print the maximum value at the end


// Code :

function hourglassSum(arr) {
    const hourglasses = [];

    if (typeof arr === "object" && arr.length === 6 && arr.map(i => i.length).reduce((acc, curr) => acc + curr) === 36) {
        for (let row = 0; row <= 3; row++) {
            for (let column = 0; column <= 3; column++) {
                let sum = 0;

                sum += arr[row][column];
                sum += arr[row][column + 1];
                sum += arr[row][column + 2];
                sum += arr[row + 1][column + 1];
                sum += arr[row + 2][column];
                sum += arr[row + 2][column + 1];
                sum += arr[row + 2][column + 2];
            }
        }
    }
}