// Problem Domain :

// Given an array 'arr' of non-negative numbers, return an array consisting of all of the even elements of 'arr', forllowed by all of the odd.


// Example :

// Input - [3, 1, 2, 4, 11, 26, 9]
// Output - [3, 1, 11, 9, 2, 4, 26] or any other variation that meets the requirements


// Algorithm :

// - Keep track of both directions you'll be moving inside the array in separate variables
// - Iterate from left to right and check if the element is even
// // - If it is even, move on to the next variable
// - Iterate from right to left and check if the element is odd
// // - If it is odd, move on to the next variable
// - While traversing swap the elements inside


// CODE :

const sortArrayByParity = (arr) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex < rightIndex) {
        while (arr[leftIndex] % 2 === 0) {
            leftIndex += 1;
        }
        while (arr[rightIndex] % 2 !== 0) {
            rightIndex -= 1;
        }
        if (leftIndex < rightIndex) {
            const temp = arr[leftIndex];
            arr[leftIndex] = arr[rightIndex];
            arr[rightIndex] = temp;
            leftIndex += 1;
            rightIndex -= 1;
        }
    } 
    return arr;
}