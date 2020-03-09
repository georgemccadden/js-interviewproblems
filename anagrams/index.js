// Problem Domain :

//  Check to see if two provided strings are anagrams of each other. One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation. Consider capital letters to be the same as lower case.

// Visual :

// anagrams('rail safety', 'fairy tales') --> True
// anagrams('RAIL! SAFETY!', 'fairy tales') --> True
// anagrams('Hi there', 'Bye there') --> False


// * Please Remember *

// const word = "HI THERE!!!!";

// word.replace(/[^\w]/g, "").toLowerCase(); // 'hithere'

function anagrams(stringA, stringB) {
    let frequency = {};

    if (stringA.length !== stringB.length) {
        return false;
    }
    for (let val of stringA) {
        frequency[val] ? frequency[val] += 1 : frequency[val] = 1;
    }
    for (let key of stringB) {
        if (!frequency[key]) {
            return false;
        } else {
            frequency[key] -= 1;
        }
    }
    return true;
}

module.exports = anagrams;