// Problem Domain :

// Given an integer, return an integer that is the reverse ordering of numbers.


// Visual :

// reverseInt(15) === 51
// reverseInt(981) === 189
// reverseInt(500) === 5
// reverseInt(-15) === -51
// reverseInt(-90) === -9


// Algorithm 1 :

// - Turn the number into a string.
// - Reverse the string.
// - Determine if integer passed in was negative or not, if so make the inverse negative as well but if not make it positive.
// - Return the integer.

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');

    if (n < 0) {
        return parseInt(reversed) * -1;
    }
    return parseInt(reversed);
}

module.exports = reverseInt;