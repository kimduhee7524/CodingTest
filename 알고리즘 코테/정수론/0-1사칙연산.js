// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b)); // 나눗셈 후 정수 부분만 출력 
console.log(a % b);


let fs = require('fs');
let input1 = fs.readFileSync('/dev/stdin').toString().split('\n');

let A = input[0];
let B = input[1];

x_1 = B[2]; // 일의 자리
x_2 = B[1]; // 십의 자리
x_3 = B[0]; // 백의 자리

console.log(Number(A) * Number(x_1));
console.log(Number(A) * Number(x_2));
console.log(Number(A) * Number(x_3));
console.log(Number(A) * Number(B));