// ** Anagram Interview Problem **

// Given two strings, write a function which to determine if the first string is an anagram of the first. (An anagram is a word, phrase, or name formed by rearranging the letters of another, such as "cinema" formed from "iceman".

function anagramOrNah(string1, string2) {
  // The first thing I want to do is check if the string lengths are the same.
  if (string1.length !== string2.length) {
    return false; // If the length is not equal, I know that it can't possibly be an anagram.
  }
  // Now I'm creating a frequency counter to keep track of the characters in the strings.
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of string1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let key of string2) {
    frequencyCounter2[key] = 
  }
}