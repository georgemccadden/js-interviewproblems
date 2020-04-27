// Problem Domain :

// Write a function that accepts an integer 'N' and returns an NxN spiral matrix.


// Visual :

//  matrix(2)
//     [[1, 2],
//     [4, 3]]
//  matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


// Algorithm :

 // Create an empty array of arrays called 'results'
 // Create a counter variale starting at 1
 // As long as (start column <= end column) AND (start row <= end row)
    // - loop from start column to end column
        // - at results [start row][i] assign counter variable
        // - increment counter
    // - increment start row
    // - loop from start row to end row
        // - at results [i][end column] assign counter variable
        // - increment counter
    // - decrement end column
    // - repeat for other sides


    // Solution :

    function matrix(n) {
        const results = [];

        for (let i = 0; i < n; i++) {
            results.push([]);
        }
        
        let counter = 1;
        let startColumn = 0;
        let endColumn = n - 1;
        let startRow = 0;
        let endRow = n - 1;

        while (startColumn <= endColumn && startRow <= endRow) {
            // Top row of the matrix
            for (let i = startColumn; i <= endColumn; i++) {
                results[startRow][i] = counter;
                counter++;
            }
            startRow++;

            // Far right column of the matrix
            for (let i = startRow; i <= endRow; i++) {
                results[i][endColumn] = counter;
                counter++;
            }
            endColumn--;

            // Bottom row of matrix
            for (let i = endColumn; i >= startColumn; i--) {
                results[endRow][i] = counter;
                counter++;
            }
            endRow--;
        }
    }