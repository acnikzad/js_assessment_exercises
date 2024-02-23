// Find the Second Largest Number
// Problem: Write a function that takes an array of numbers and returns the second largest number in the array.

// Difficulty: Easy to Medium

function second_largest(nums) {

    let sortedArr = Array.from(new Set(nums));
    sortedArr.sort((a, b) => a - b); 
    
    return sortedArr[sortedArr.length-2];
}

let arr = [18, 45, 32, 98, 76, 56]

console.log(second_largest(arr))