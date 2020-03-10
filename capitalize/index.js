// Problem Domain :

// Write a function which accepts a string. This function should capitalize the first letter of each word in the string and then return the capitalized string.


// Visual :

// capitalize('a short sentence') --> 'A Short Sentence'
// capitalize('a lazy fox') --> 'A Lazy Fox'
// capitalize('look, it is working!') --> 'Look, It Is Working!'


// Solution 1 :

function capitalize(str) {
    const words = [];

    for (let word of str) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(' ');
}