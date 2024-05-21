// 입력된 10개의 수에 대해 42로 나눈 나머지를 구한 후, 
// 서로 다른 나머지의 개수를 출력하는 프로그램
// 입력
// 38
// 41
// 44
// 46
// 출력
// 4

//현재 출력할 값
// 나머지값 
//집합

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

let data = input.map(Number);
let mySet = new Set(); // 집합 객체 생성

// 원소를 하나씩 확인하며
for (let i = 0; i < 10; i++) {
    mySet.add(data[i] % 42); // 42로 나눈 나머지를 집합의 원소로 삽입
}

// 집합에 포함된 원소의 개수 출력
console.log(mySet.size);



// 간락하게 
let remainders = input.map(x => x % 42);
let uniqueRemainders = new Set(remainders);
console.log(uniqueRemainders.size);