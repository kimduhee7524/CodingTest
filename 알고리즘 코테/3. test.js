
// (A+D)x + (B+E)y = C+F
// 1,3,-1,4,1,7
// 2,-1

// x+3y =-1
// 4x+y =7
// 4x+12y =-4
// ------------
// -11y=11
// y=-1
// x=2

// A<D
// (A*A/D)x + (B*A/D)y = C*A/D
// (D-A*A/D)x + (E-B*A/D)y = F -C*A/D
// y=F -C*A/D / (E-B*A/D)

function solveLinearEquations(A, B, C, D, E, F) {
    // y 값을 구하기 위한 분모를 계산
    const denominator = E - (B * A / D);

    // 분모가 0이면 유일한 해가 없음을 반환
    if (denominator === 0) {
        return null;
    }

    // y 값을 계산
    const y = (F - (C * A / D)) / denominator;

    // y 값을 이용하여 x 값을 계산
    const x = (C - B * y) / A;

    return { x: x, y: y };
}

// 예제 사용법
const A = 1, B = 1, C = 5;
const D = 2, E = 3, F = 12;
const solution = solveLinearEquations(A, B, C, D, E, F);

// D(Ax+By)=D⋅C
// A(Dx+Ey)=A⋅F
// -> 
// ADx+DBy=DC
// ADx+AEy=AF
// -> ADx+DBy)−(ADx+AEy)=DC−AF
// -> y(DB−AE)=DC−AF
// -> y=(B×D−A×E)

function solveLinearEquations(A, B, C, D, E, F) {
    // D와 A를 이용하여 y를 소거
    const denominator = (B * D - A * E);

    if (denominator === 0) {
        return null; // 해가 없거나 무수히 많은 경우
    }

    // y 계산
    const y = (D * C - A * F) / denominator;

    // y 값을 이용하여 x 계산
    const x = (C - B * y) / A;

    return { x: x, y: y };
}

// 모든 경우의수 계산
const solveEquations = (A, B, C, D, E, F) => {
    for (let x = -10000; x <= 10000; x++) {
      for (let y = -10000; y <= 10000; y++) {
        if (A * x + B * y === C) {
          if (D * x + E * y === F) {
            console.log(x, y);
            return;
          }
        }
      }
    }
  };