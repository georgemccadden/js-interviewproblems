// Problem Domain :

// Write a function that accepts a positive number N. The function should console log a pyramid shape with N levels using the '#' character. Make sure the pyramid has spaces on both the left *and* right hang sides.

// Visual :

// pyramid(1)
// '#'
// pyramid(2)
// ' # '
// '###'
//   pyramid(3)
// '  #  '
// ' ### '
// '#####'


// Algorithm :

// - Iterate through each row of our output (from 0 to n)
// - - Create an empty string (for levels)
// - - Iterate through each column (from 0 to n)
// - - - If the current column is equal to or less than the current row :
// - - - - Add a '#' to 'stair'
// - - - Else ;
// - - - - Add a space to 'level'
// - - Console log 'stair'



// Code :

function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) / 2);
}


// Recursive Algorithm :

// If row === n then return just the top portion of the pyramid.
//

function recursivePyramid(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return recursivePyramid(n, row + 1);
    }

    const midpoint = Math.floor = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
}
module.exports = pyramid;