// Anagram Checker
// Problem: Write a function that checks if two strings are anagrams of each other (contain the same letters in a different order).

// Difficulty: Medium

function anagram(str1, str2) {
    const createCharMap = (text) => {
        const charMap = {};
        for (let char of text.replace(/[^\w]/g, '').toLowerCase()) {
            charMap[char] = charMap[char] + 1 || 1;
        }
        return charMap;
    };

    const charMap1 = createCharMap(str1);
    const charMap2 = createCharMap(str2);

    if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
        return false;
    }

    for (let char in charMap1) {
        if (charMap1[char] !== charMap2[char]) {
            return false;
        }
    }

    return true;
}

console.log(anagram("listen", "silent"));
console.log(anagram("hello", "bello")); 