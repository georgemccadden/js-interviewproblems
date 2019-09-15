// Given a 32-bit signed integer, reverse digits of an integer.

// Arrow function approach -

const reversedNum = num => parseFloat(num.toString().split('').reverse().join('') * Math.sign(num));

// Algorithm :

// Convert the number to a string - "num.toString()" - converts the given number to a string. Doing this will allow me to use "split()" function.
// ex. let num = -5432100;
//     num.toString(); // num equals '-5432100'


// Split the string into an array - "num.split('')" - converts the string into an array of characters. Doing this will allow me to use the array reverse functions, which does not work on a string.
// ex. num = '-5432100'
//     num.split(''); // num equals ['-', '5', '4', '3', '2', '1', '0', '0'];

