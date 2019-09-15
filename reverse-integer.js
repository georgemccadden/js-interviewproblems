// Given a 32-bit signed integer, reverse digits of an integer.

// Arrow function approach -

const reversedNum = num => parseFloat(num.toString().split('').reverse().join('') * Math.sign(num));

// Algorithm :

// Convert the number to a string - "num.toString()" - converts the given number to a string. Doing this will allow me to use "split()" function.
// ex. let num = -5432100;
//     num.toString(); // num equals '-5432100'


// Split the string into an array - "num.split('')" - converts the string into an array of characters. Doing this will allow me to use the array reverse functions, which does not work on a string.
// ex. num = '-5432100'
//     num.split(''); // num equals ['-', '5', '4', '3', '2', '1', '0', '0']


// Reverse the array - "num.reverse()" - reverses the order of the items in the array.
// ex. num = ['-', '5', '4', '3', '2', '1', '0', '0']
//     num.reverse(); // num equals ['0', '0', '1', '2', '3', '4', '5', '-']


// Join it back into a string - "num.join('')" - reassembles the reversed characters into a string.
// ex. num = ['0', '0', '1', '2', '3', '4', '5', '-']
//     num.join(''); // num = '0012345-'


// Parse the input value into a floating point number - "parseFloat(num)" - converts "num" into a float from a string. The code runs in the end (even though it is on the first line of the function) on the reversed number and removes any leading zeros.
// ex. num = '0012345-'
//     parseFloat(num); // num = 12345


// Multiply it by the sign of the orginal number (to maintain the negative value) - "num * Math.sign(num)" - multiplies the number with the sign of the original number provided.
// ex. original value of num = -5432100
//                       num = 12345
//     num * Math.sign(-5432100); // num = -12345

