// Problem Domain :

// An array is monotonic if it is either monotone increasing or decreasing. Return 'true' if and only if the given array is monotonic.


// Example :

// Input - [1, 2, 2, 3, 3]
// Output - true

// Input - [1, 3, 2, 6, 8]
// Output - false


// Algorithm :

// - Keep a tally of whether or not the next element is equal/decreasing or equal/increasing
// - iterate through the entire array
// - return whether or not the tallies are equal to the length of the array minus one.


// Code :

function isMonotonc(arr) {
    let increasing = 0;
    let decreasing = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= arr[i + 1]) increasing++;
        if (arr[i] >= arr[i + 1]) decreasing++;
    }
    return (increasing === arr.length - 1 || decreasing === arr.length - 1);

}