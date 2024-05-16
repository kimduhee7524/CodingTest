// 모든 경우의 수 계산 -> 시간 복잡도 o(n^2)
function countWays(totalCandies) {
    let count = 0;

    for (let A = 1; A < totalCandies; A++) {
        for (let B = 1; B < totalCandies; B++) {
            if (A > B + 1) { // A는 B보다 2개 이상 많아야 합니다.
                let C = totalCandies - A - B;
                if (C > 0 && C % 2 === 0) { // C가 짝수여야 합니다.
                    count++;
                }
            }
        }
    }

    return count;
}



// 사탕 개수 N
// 예 7개 
// C:2 -> B:1 ->A:4
// C:4 -> B:1 ->3

// 1)N-C>=3
// 2)N-c-b<=b+2
// -> 시간 복잡도 o(n^2/2)
function countWays(N) {
    let x = 0;

    for (let C = 2; C < N; C += 2) {  // C는 짝수
        let remaining = N - C;
        for (let B = 1; B < remaining; B++) {
            let A = remaining - B;
            if (A > B + 1) {  // A는 B보다 2개 이상 많아야 함
                x++;
            }
        }
    }
    return x;
}

