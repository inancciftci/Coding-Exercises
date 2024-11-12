// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const arr = str.split(' ');
    let res = [];
    for (let word of arr) {
        res.push(word[0].toUpperCase() + word.slice(1))
    }
    return res.join(' ');
}

module.exports = capitalize;

//SOLUTION ONE
// function capitalize(str) {
//     const arr = str.split(' ');
//     let res = [];
//     for(let i=0; i<arr.length; i++) {
//         let currentStr = arr[i];
//         let newArr = [...currentStr];
//         newArr[0] = newArr[0].toUpperCase();
//         res.push(newArr.join(''));
//     }
//     return res.join(' ');
// }
