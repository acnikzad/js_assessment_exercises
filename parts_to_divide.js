// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.

function partlist(arr) {
    const result = [];
    for (let i = 1; i < arr.length; i++) {
        const firstPart = arr.slice(0, i).join(' ');
        const secondPart = arr.slice(i).join(' ');
        result.push([firstPart, secondPart]);
    }
    return result;
}

const a = ["az", "toto", "picaro", "zone", "kiwi"];
console.log(partlist(a));