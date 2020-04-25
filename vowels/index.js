// Problem Domain :

// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.


// Visual :

//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let counter = 0;

    for (let char of str) {
        if (char === 'a' || 'e' || 'i' || 'o' || 'u') {
            counter++
        }
    }
    return counter;
}

module.exports = vowels;
