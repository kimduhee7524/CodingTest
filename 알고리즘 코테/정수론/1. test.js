

// 전체 탐색
function countRedLights(N) {
    // 모든 조명이 초록색으로 초기화됨
    let lights = Array(N).fill(false); // false: 초록색, true: 빨간색

    // 각 학생은 자신의 배수에 해당하는 조명을 전환함
    for (let student = 1; student <= N; student++) {
        for (let j = student; j <= N; j += student) {
            lights[j - 1] = !lights[j - 1];
        }
    }

    // 빨간색 조명의 개수를 셈
    let redCount = lights.filter(light => light).length;
    return redCount;
}

//완전 제곱수인 경우
function countRedLightsOptimized(N) {
    let count = 0;
    for (let i = 1; i * i <= N; i++) {
        count++;
    }
    return count;
}

// 더 최적화 한 경우 
function countRedLightsOptimized(N) {
    const answer = Math.floor(Math.sqrt(N));  //Math.floor:내림하여 정수부분만 남기기 
    return answer;
}