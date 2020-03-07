// Problem Domain : Given an array and chuck size, divide the array into many subarrays where each subarray is of length size.


// Visual :

// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// Algorithm 1:

// - Create a function which accepts an array and number
// - Create an empty array to hold "chunked" data

// - For each element in the original array :
// - * Iterate through the array passed into the function *
// - * Retrieve the last element in the "chunked" array *
// - * If the last element doesn't exist or if its length is equal to chunk size then push a new chunk into "chunked" array with the current element.
// - * If anything else, add the current element to the "chunked" array.
// - Return the chunked array.


// Solution 1 :

function chunk(array, size) {
    const chunked = [];

    for (let element of array) {
        const last = chunked[chunked.length - 1];

        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }

    return chunked;
}

// Algorithm 2 :

// - Create a function which accepts an array and a number.
// - Create an empty "chunked" array.


module.exports = chunk;