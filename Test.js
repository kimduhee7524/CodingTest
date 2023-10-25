// 1. bills 배열에 10개의 숫자를 넣습니다.
const bills = [25, 45, 60, 15, 80, 40, 100, 10, 35, 50];

// 2. calculateTip 함수를 정의하여 팁을 계산하는 로직을 작성합니다.
function calculateTip(amount) {
  if (amount >= 30) {
    return amount * 0.15; // 30 이상은 15%의 팁
  } else {
    return amount * 0.20; // 30 미만은 20%의 팁
  }
}

// 3. tips 배열을 bills 배열을 기반으로 생성합니다.
const tips = bills.map(calculateTip);

// 4. 팁을 출력합니다.
console.log(tips);