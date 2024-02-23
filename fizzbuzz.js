// FizzBuzz
// Problem: Write a function that prints each number from 1 to n on a new line. 
// For each multiple of 3, print "Fizz" instead of the number. For each multiple of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

// Difficulty: Easy

function fizzbuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i, 'FizzBuzz');
        } else if (i % 3 === 0) {
            console.log(i, 'Fizz');
        } else if (i % 5 === 0) {
            console.log(i, 'Buzz')
        } else {
            console.log(i)
        }
    }
}

console.log(fizzbuzz(100))