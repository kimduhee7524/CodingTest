// 주어진 문자열에서 각 문자를 R번 반복하여 새로운 문자열을 만드는 프로그램을 작성
// 입력
// 2
// 3 ABC
// 5 /HTP

// 출력
// AAABBBCCC
// ///////HHHHHTTTTTPPPPP

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);

// 한 줄(line)씩 입력받기
for (let i = 1; i <= testCase; i++) {
    let [r, s] = input[i].split(" ");
    r = Number(r);
    let result = "";
    // 현재 문자열의 각 문자를 하나씩 확인하며
    for (let j = 0; j < s.length; j++) {
        // r번 반복한 문자열을 뒤에 이어붙이기
        result += s.charAt(j).repeat(r);
    }
    console.log(result);
}


//
let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
    let [r, s] = input[i].split(" ");
    r = Number(r);
    let result = '';
    for (let j = 0; j < s.length; j++) {
        result += s[j].repeat(r);
    }
    console.log(result);
}


for (let i = 1; i <= num; i++) {
    let parts = input[i].split(" ");
    let r = Number(parts[0]);
    let s = parts[1];
    
    let result = '';
    for (let j = 0; j < s.length; j++) {
        for (let k = 0; k < r; k++) {
            result += s[j];  // .repeat() 대신 반복문 사용
        }
    }
    console.log(result);
}