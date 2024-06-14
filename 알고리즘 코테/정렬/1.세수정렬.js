// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input[0].split(' ').map(Number);
// 오름차순 정렬 수행
arr.sort(function(a, b) {
    return a - b;
})

let answer = "";
for (let i = 0; i < arr.length; i++) {
    answer += arr[i] + " ";
}
console.log(answer);




function selectionSort(arr) { // 선택 정렬 함수
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i; // 가장 작은 원소의 인덱스
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) minIndex = j;
        }
        let temp = arr[i]; // 스왑(swap)
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

let fs = require('fs');
let input_ = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr_ = input_[0].split(' ').map(Number);
selectionSort(arr_);

let answer_ = "";
for (let i = 0; i < arr_.length; i++) {
    answer_ += arr[i] + " ";
}