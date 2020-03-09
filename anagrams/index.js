// Problem Domain :

//  Check to see if two provided strings are anagrams of each other. One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation. Consider capital letters to be the same as lower case.

// Visual :

// anagrams('rail safety', 'fairy tales') --> True
// anagrams('RAIL! SAFETY!', 'fairy tales') --> True
// anagrams('Hi there', 'Bye there') --> False


// * Please Remember *

// const word = "HI THERE!!!!";

// word.replace(/[^\w]/g, "").toLowerCase(); // 'hithere'

// Solution 1 :

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;
}

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

module.exports = anagrams;


// Solution 2 :

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

// Solution 3

function anagrams(stringA, StringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(srt) {
    str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagram;