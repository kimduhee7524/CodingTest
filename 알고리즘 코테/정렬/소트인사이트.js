// 객체 사용하기 
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();


// 숫자를 배열로 변환하고 내림차순으로 정렬한 후 다시 문자열로 변환
const sorted = input.split('').sort((a, b) => b - a).join('');

// 결과 출력
console.log(sorted);