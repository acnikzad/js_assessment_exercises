// Palindrome Checker
// Problem: Write a function that checks if a given string is a palindrome (a string that reads the same backward as forward).

// Difficulty: Easy to Medium

function palindrome(word) {

    const cleaned = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed  = cleaned.split('').reverse().join('');

    return cleaned === reversed;

}

let word1 = 'racecar'
let word2 = 'normalcar'

console.log(palindrome(word2))