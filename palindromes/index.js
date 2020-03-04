// Problem Domain : 

// Given a string, return true if the string is a palindrome or false if it is not. Palindromes are strings that form the same word if they are reversed - Do include spaces and punctuation when determining if the string is a palindrome.


// Visuals :

// palindrome("abba") === true
// palindrome("abcdefg") === false


// Algorithm 1 :

// - Create a variable for the passed in string.
// - Reverse the passed in string.
// - Compare the passed in string with that reversed string to determine whether or not they are equal, if so then return true.


// Solution 1 :

// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');

//     return str === reversed;
// }

// module.exports = palindrome;

// Algorithm 2 :

// - Compare the first element of the string with the last element and iterate that same comparison until you reach the middle of the array.
// - If any of the elements don't equal the current elemnt then return false.


// Solution 2 : 

function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}

module.exports = palindrome;