// Problem Domain :

// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).


// Example :

// Input - [3, 2, 1]
// Output - 1
// Explanation - The third maximum is 1.

// Input - [1, 2]
// Output - 2
// Explanation - The third maximum does not exist, so the maximum (2) is returned instead.

// Input - [2, 2, 3, 1]
// Output - 1
// Explanation - Note that the third maximum here means the third maximum distinct number. Both numbers with value 2 are both considered as second maximum.


// Algorithm :

// - Create variables which represent the 3 largest elements in the array
// - Iterate through the entire array
// - Start the value comparisons
// - Determine the max and change the second and third maxes
// - Determine the second max and change the third max
// - Determine the third max
// - If there is a third max then return it but if not then return the max