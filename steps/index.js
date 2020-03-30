// Problem Domain :

// Write a function which accepts a positive number 'n'. The function should console log a step shape with 'n' levels using the # character. Make sure the step has spaces on the right hand side.


// Visual :

// steps(2)
// '# '
// '##'

// steps(3)
// '#  '
// '## '
// '###'

// steps(4)
// '#   '
// '##  '
// '### '
// '####'


// Algorithm :

// - Iterate until you reach the passed in number
// - - Create an empty string for the 'stair'
// - - Iterate until you reach the passed in number
// - - - If the current iteration number is equal to or less than than the first iteration number then :
// - - - - Add a '#' to 'stair'
// - - - Else :
// - - - - Add a space to 'stair'
// - - Console log 'stair'


// Code :

function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';

        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}

function printNumber(n, dec = 1) {
    if (n === 0) {
        return;
    }

    console.log(n);
    printNumber(n - dec);
}

module.exports = steps;

// Recursive Algorithm :

// - If (row === n) then you have hit the end of the problem
// - If the 'stair' string has a length of === n then you are at the end of that row
// - If the length of the stair string is less than or equal to the row number you're working on, add a '#', otherwise add a space.


// Code :

function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }
}