// Problem Domain :

// Print out the n-th entry in the fibonacci series. The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two. For example, the sequence [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series.


// Example :

// fib(4) === 3


// Algorithm :

// - Write a program which accepts a number (this will be the index we stop on)
// - Create a collection which holds the first two entries of the fibonacci sequence
// - Iterate through the collection beginning at the third entry and stop at the passed in number (index)
// - Create variables to keep track of the indexes needed to add

// Solution :

function fib(n) {
    const sequence = [0, 1];

    for (let i = 2; i <= n; i++) {
        const a = sequence[i - 1] // index 1
        const b = sequence[i - 2] // index 0

    }

}


module.exports = fib;