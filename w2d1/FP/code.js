function sum(num) {
    return num.reduce((x, y) => x + y);
}

function multiply(num) {
    return num.reduce((x, y) => x * y);
}

function reverse(str) {
    return str.split('').reverse().join('');
}

function findLongestWord(words) {
    const longest = words.split(" ").sort((a, b) => b.length - a.length);
    return longest[0];
}