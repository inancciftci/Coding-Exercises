// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let obj = {};
    const strArr = [...str.toLowerCase()];
    for (let letter of strArr) {
        if(!obj[letter]) {
            obj[letter] = 1;
        } else {
            obj[letter]++
        }
    }
    const keys = Object.keys(obj);
    let res = 0;
    for(let key of keys) {
        if (vowels.includes(key)) {
            res += obj[key];
        }
    }
    return res;
}

module.exports = vowels;
