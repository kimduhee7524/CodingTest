
// 완전탐색. 시간 복잡도 O(N)
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0]);
let summary = 0;

for (let i = 1; i <= n; i++) {
    summary += i;
}

console.log(summary);

//등차수열. 시간 복잡도 상수시간 

let fs = require('fs');
let input1 = fs.readFileSync('/dev/stdin').toString().split('\n');

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let m = Number(input1[0]);

// 등차수열의 합 공식
console.log(m * (m + 1) / 2);