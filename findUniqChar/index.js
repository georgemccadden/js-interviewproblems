// Problem Domain :

// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.


// Example :

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

// Explanation - With each character in the string a check must be performed to see when or if that character appears in the remaining indices of the string. As you search, the first element which does not have any repeated characters is the one which index must be returned.


// Algorithm :

// Brute force -
// - Create a hashmap of the characters as keys and the amount of times they appear in the string as their values
// - Iterate through the string by all of its individual characters
// - While iterating, check the character's value in the hashmap and find the first element to have 0 as their value
// - Return that character's index