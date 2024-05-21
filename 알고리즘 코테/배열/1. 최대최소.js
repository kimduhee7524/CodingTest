//입력
// 5
// 20 10 35 38 7
// 출력
// 7 35

// 원소를 하나씩 확인한다면 시간 복잡도 O(N)

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


let num = Number(input[0]);
let arr = input[1].split(' ').map(Number);

/*
모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.
*/
let min = 1000001; // 일단 큰 수로 초기화
let max = -1000001; // 일단 작은 수로 초기화

for (let i = 0; i < num; i++) {
    if (min > arr[i]) min = arr[i];
    if (max < arr[i]) max = arr[i];
}


// js 함수 사용하기  

let n = Number(input[0]);
let data = input[1].split(' ').map(x => Number(x));

let minValue = data.reduce((a, b) => Math.min(a, b));
let maxValue = data.reduce((a, b) => Math.max(a, b));

console.log(minValue + " " + maxValue);


// 서로 다른 9개의 수 중에서 최대값과 최댓값의 순서 구하기-> 순서는 인덱스 +! 
// 입력 
// 20
// 10
// 35
// 30
// 7

//출력
// 35
// 3 

// 완전탐색 
let fs = require('fs');
let input_ = fs.readFileSync('/dev/stdin').toString().split('\n');

let maxIndex_ = 0;
let maxValue_ = 0;
for (let i = 0; i < 9; i++) { // 모든 데이터를 하나씩 확인하며
    let data = Number(input_[i]);
    if (maxValue_ < data) {
        maxValue_ = data;
        maxIndex_ = i;
    }
}

console.log(maxValue_);
console.log(maxIndex_ + 1);

// js 함수 사용
let data_ = input.map(x => Number(x));
let max_ = Math.max(...data_);

console.log(max_);
console.log(input.indexOf(String(max_)) + 1);


// 세준이가 자신의 점수를 새로운 방법으로 계산하는 프로그램을 작성하는 것입니다. 
// 새로운 점수 계산 방식은 다음과 같습니다:

// 현재 점수 중 최대값을 구합니다.
// 각 점수를 (현재 점수 / 최대 점수) * 100으로 변환하여 새로운 점수를 계산합니다.
// 새로 계산된 점수들의 평균을 구합니다
// 입력
// 3
// 40 80 60

// 출력
// 75.0

let fs = require('fs');
let _input = fs.readFileSync('/dev/stdin').toString().split('\n');
let sum;
let average;
for(i=1; i<=_input[0];i++){
    sum+=_input[i]
}
average= sum/_input[0];
