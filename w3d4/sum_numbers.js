const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let sum = 0;
const getNumber = () => {

    readline.question('Enter a number or write stop to get a result ', num => {

        if (num !== null && num === 'stop') {
            readline.close();
            console.log("The sum is " + sum)
            return sum;
        }

        if (isNumeric(num)) {
            sum += Number(num);
        }
        getNumber();

    });
}

getNumber();