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

function printNumber(n) {
    if (n === 0) {
        return;
    }

    console.log(n);
}

module.exports = steps;