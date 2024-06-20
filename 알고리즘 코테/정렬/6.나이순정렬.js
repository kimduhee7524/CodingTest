// 객체 사용하기 
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = Number(input[0]); 

// 빈 배열 생성 (사람 객체를 저장할 배열)
let people = [];

// 두 번째 줄부터 각 사람의 정보를 객체로 변환하여 배열에 추가
for (let i = 1; i <= number; i++) {

    let person = {
        age:null,
        name:null
    };

    [person.age, person.name] = lines[i].split(' ');
    // 배열에 객체 추가
    people.push(person);
}

people.sort((a, b) => {
    return a.age - b.age;

});

let answer_ = "";
for (let person of people) {
    answer_= person.age + ' ' + person.name+ "";
}

console.log();



// 베열만 사용하기
let fs = require('fs');
let lines = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(lines[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
    let age = Number(lines[i].split(' ')[0]);
    let name = lines[i].split(' ')[1];
    arr.push([age, name]);
}

arr.sort((a, b) => a[0] - b[0]); 

let answer = "";
for (let x of arr) answer += x[0] + " " + x[1] + "\n";
console.log(answer);
