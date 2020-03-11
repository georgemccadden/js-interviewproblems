// Problem Domain :

// Write a function which accepts a string. This function should capitalize the first letter of each word in the string and then return the capitalized string.


// Visual :

// capitalize('a short sentence') --> 'A Short Sentence'
// capitalize('a lazy fox') --> 'A Lazy Fox'
// capitalize('look, it is working!') --> 'Look, It Is Working!'


// Algorithm 1 :

// - Make an empty array for the words.
// - Split the input string by spaces in order to create an array.
// - For each word in the array, capitalize the first letter, join the first letter with the rest of the string, and then push the results into the array for the words.
// - Join the array for the words into a string and return it.


// Solution 1 :

// function capitalize(str) {
//     const words = [];

//     for (let word of str) {
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }

//     return words.join(' ');
// }


// Alogirithm 2 :

// - Create a result variable which capitalizes the first letter of the passed in string.
// - Iterate through the string and look to see if there is a space to the left of each character. If so, capitalize that character and then add it to the result variable. If not, add it to the result variable.


// Solution 2 :

function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (words[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }

        return result;
    }
}

module.exports = capitalize;