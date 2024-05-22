// "abc" 가 입력으로 들어오면 "cba" 로 뒤집기

let str = "Hello, world!";
let reversedStr = str.split('').reverse().join('');

console.log(reversedStr);  // 출력: "!dlrow ,olleH"


// 
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
}