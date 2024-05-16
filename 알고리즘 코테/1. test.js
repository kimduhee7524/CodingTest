const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0])
const results = [];

function isPasswordValid(numbers) {
    for (let i = 2; i <= 1000000; i++) {
        if (number % i === 0) {
            return "NO";
        }
    }
    return "YES";
}

for (let j = 1; j <= TC; j++) {
    const number = BigInt(input[j]);
    results.push(isPasswordValid(number));
}

results.forEach(result => console.log(result));