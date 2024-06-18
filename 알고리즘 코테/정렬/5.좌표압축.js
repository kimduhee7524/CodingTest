// - 수직선 위에 N개의 좌표 X1,X2,...,XN이 있다.
// - 이 좌표에 좌표 압축을 적용하려고 한다.
// - Xi를 좌표 압축한 결과 Xi′의 값은 xi>xj를 만족하는 서로 다른 좌표의 개수와 같아야 한다.
// - X1,X2,...,XNX_1, X_2, ..., X_NX1,X2,...,XN에 좌표 압축을 적용한 결과 
//   X1′,X2′,...,XN′를 출력해보자.

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); 
let arr = input[1].split(' ').map(Number);

let answer = new Array(n);
for(i=0; i<arr.length; i++){
    sum=0;
    for(j=0; arr.length; j++){
        if(i==j) return
        if(arr[i]>arr[j]){
            sum++;
        }
    }
    answer[i]=sum;
}


// 집합 이용해서 풀기!!

let fs = require('fs');

// 집합(set)으로 변경해 중복 값을 없앤 뒤에 다시 배열로 변환
let uniqueArray = [...new Set(arr)];
uniqueArray.sort((a, b) => a - b); // 오름차순 정렬 수행

// 0부터 차례대로 매핑(mapping) 수행
let myMap = new Map();
for (let i = 0; i < uniqueArray.length; i++) {
    myMap.set(uniqueArray[i], i);
}

let answer_ = "";
for (x of arr) answer_ += myMap.get(x) + " ";
console.log(answer_);



