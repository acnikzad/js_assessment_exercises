// Array Sum
// Problem: Given an array of integers, find the sum of its elements.

// Sample Input: [1, 2, 3, 4, 10, 11]

// Sample Output: 31

// Difficulty: Easy

function sumArray(arr) {
    let sum = 0;
    for (let x = 0; x <= arr.length - 1; x++) {
        sum += arr[x]
    }
    return sum
}

let arr = [1, 2, 3, 4, 10, 11]

console.log(sumArray(arr))