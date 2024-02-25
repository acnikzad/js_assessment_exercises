function needleHaystack(word) {
    
    let haystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]
    let index = 0;
    while(index < haystack.length) {
        if(word  === haystack[index]) {
            return `Found ${word} at position ${index} in the array.`;
        } else {
            index++;
        }
    }
}

console.log(needleHaystack("needle"))