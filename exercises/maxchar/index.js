// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const arr = [...str];
    const obj = {};
    for (const a of arr) {
        if(!obj[a]) {
            obj[a] = 1;
        } else {
            obj[a] += 1;
        }
    }

    let maxCount = 0;
    let maxChar = '';

    for(let char in obj) {
        if (obj[char] > maxCount) {
            maxCount = obj[char];
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = maxChar;
