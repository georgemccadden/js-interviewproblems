// Problem Domain :

// Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm provided (Hacker Rank). Once sorted, print the following three lines:

// CODE :

function countSwaps(arr) {
    let numSwaps = 0;
    let thereWereNoSwaps = true;

    for (let i = 0; i < arr.length - 1; i += 1) {
        for (let k = 0; k < arr.length - 1; k += 1) {
            if (arr[k] > arr[k + 1]) {
                const temp = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = temp;
                numSwaps += 1;
                thereWereNoSwaps = false;
            }
        }

        if (thereWereNoSwaps) break;
    }

    console.log(`Array is sorted in ${numSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);

}