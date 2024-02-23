// Merge Two Sorted Arrays
// Problem: Given two sorted arrays, write a function to merge them into one sorted array.

// Difficulty: Medium

function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < arr1.length || j < arr2.length) {
        if (i === arr1.length) {
            merged.push(arr2[j]);
            j++;

        } else if (j === arr2.length || arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;

        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    return merged;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(mergeSortedArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]