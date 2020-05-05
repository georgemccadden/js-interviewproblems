// Problem Domain :

// Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Write a function that takes a string and return a new string with all vowels removed.


// Example :

// The string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!" * 'y' isn't considered a vowel *


// Algorithm :

// - Function must accept a string
// - Use regex to replace each vowel with an empty space
// - Make sure the regex is case insensitive
// - return the string with the missing characters


// Code :

function disemvowel(str) {
    return str.replace(/[aeiou]/ig, '');
}