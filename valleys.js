// Counting Valleys
// Problem: Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. 
// During his last hike, he took exactly n steps. For every step, he noted if it was an uphill, U, or a downhill, D step. 
// Gary's hikes start and end at sea level. Given Gary's sequence of up and down steps during a hike, find and print the number of valleys he walked through. 
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

// Difficulty: Medium

function countingValleys(steps, path) {
    let seaLevel = 0;
    let valleys = 0;
    let inValley = false;

    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            seaLevel++;
        } else {
            seaLevel--;
        }

        if (seaLevel === 0 && path[i] === 'U') {
            valleys++;
        }
    }

    return valleys;
}

// Example usage
const steps = 12;
const path = 'DDUUDDUDUUUD';
console.log(countingValleys(steps, path)); // Output: 2