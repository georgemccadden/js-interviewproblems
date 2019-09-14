// Given a 32-bit signed integer, reverse digits of an integer.

// Arrow function approach -

const reversedNum = num => parseFloat(num.toString().split('').reverse().join('') * Math.sign(num));

// Algorithm :

// Convert the number to a string - "num.toString()" converts the given number to a string. Doing this will allow me to use "split()" function.

//