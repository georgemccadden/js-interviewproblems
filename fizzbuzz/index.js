// Problem Domain :

// Write a program which console logs the numbers from 1 to n. For multiples of three print "fizz" instead of the number and for multiples of five print "buzz". For numbers which are multiples of both print "fizzbuzz".


// Visual :

// fizzBuzz(5);
// 1
// 2
// fizz
// 4
// buzz
// ...
// 14
// fizzbuzz
// 16


// Algorithm 1 :

// - Create a function which accepts a number.
// - Starting from 1, loop until you reach that passed in number.
// - If you reach a number that is both a multiple of 3 and 5 then console log the word "fizzbuzz".
// - If you reach a number that is just a multiple of 3 print "fizz" instead of 3.
// - If you reach a number that is just a multiple of 5 print "buzz" instead of 5.
// - As you're looping, if you reach a number that isn't a multiple of either of those numbers then just print the number.


// Solution 1 :

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

module.exports = fizzBuzz;