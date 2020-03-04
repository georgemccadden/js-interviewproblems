// Problem Domain : 

// Given a string, return true if the string is a palindrome or false if it is not. Palindromes are strings that form the same word if they are reversed - Do include spaces and punctuation when determining if the string is a palindrome.


// Visuals :

// palindrome("abba") === true
// palindrome("abcdefg") === false


// Algorithm :

// - Create a variable for the passed in string.
// - Reverse the passed in string.
// - Compare the passed in string with that reversed string to determine whether or not they are equal, if so then return true.


// Solution 1 :

function palindrome(str) {
    const reversed = str.split('').reverse().join('');

    return str === reversed;
}

// Solution 2 :