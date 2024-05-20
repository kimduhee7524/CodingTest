const A = [x, y, z];
const B = [z, b, c];

function check(A, B) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
        if (A[i] === B[i]) {
            strike++;
        } else if (B.includes(A[i])) {
            ball++;
        }
    }

    return { strike, ball };
}

// 테스트 실행
const result = check(A, B);
console.log(`Strikes: ${result.strike}, Balls: ${result.ball}`);