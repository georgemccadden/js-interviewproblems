// ** Anagram Interview Problem **

// Given two strings, write a function which to determine if the first string is an anagram of the first. (An anagram is a word, phrase, or name formed by rearranging the letters of another, such as "cinema" formed from "iceman".

function anagramOrNah(string1, string2) {
  // The first thing I want to do is check if the string lengths are the same.
  if (string1.length !== string2.length) {
    return false; // If the length is not equal, I know that it can't possibly be an anagram.
  }
  // Now I'm creating a frequency counter to keep track of the characters in the first string.
  let frequencyCounter = {};

  for (let val of string1) {
    // If the letter or 'val' exists, increment, otherwise set to 1.
    frequencyCounter[val] ? frequencyCounter[val] += 1 : frequencyCounter[val] = 1;
  }
  for (let key of string2) {
    // I need to check if the letter even exists, if not, return false.
    if (!frequencyCounter[key]) {
      return false;
    } else {
      // If we find a letter that is in our dictionary then we'll decrement its value.
      frequencyCounter[key] -= 1;
    }
  }
  return true;
}

