// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const width = 2 * n - 1;

    for(let row=0; row<n; row++) {
        let level = '';
        const hashes = 2 * row + 1;
        const spaces = (width-hashes) / 2;

        level += ' '.repeat(spaces) + '#'.repeat(hashes) + ' '.repeat(spaces);

        console.log(level)
    }
}

module.exports = pyramid;
