
function minimumDistance(students) {
    // X, Y 좌표를 각각 배열로 분리
    const xCoords = students.map(student => student[0]);
    const yCoords = students.map(student => student[1]);
  
    // 중위수를 구하기 위해 정렬 (오름차순 정렬)
    xCoords.sort((a, b) => a - b);
    yCoords.sort((a, b) => a - b);
  
    // 중위수를 찾기
    const medianX = xCoords[Math.floor(xCoords.length / 2)];
    const medianY = yCoords[Math.floor(yCoords.length / 2)];
  
    // 모든 학생들의 이동 거리의 합 계산
    let totalDistance = 0;
    for (let i = 0; i < students.length; i++) {
      totalDistance += Math.abs(students[i][0] - medianX) + Math.abs(students[i][1] - medianY);
    }
  
    return totalDistance;
  }
  
  const students = [
    [15, 14], // A 짱구
    [15, 16], // B 철수
    [14, 15], // C 맹구
    [16, 15]  // D 유리
  ];
  
  console.log(minimumDistance(students)); 


  // 모든 경우의 수 계산 
  
  function minimumDistanceBruteForce(students) {
    let minDistance = Infinity;
  
    // 모든 학생의 집 위치를 기준으로 시도
    for (let i = 0; i < students.length; i++) {
      for (let j = 0; j < students.length; j++) {
        const meetX = students[i][0];
        const meetY = students[j][1];
  
        // 현재 위치에서 모든 학생의 이동 거리 합 계산
        let totalDistance = 0;
        for (let k = 0; k < students.length; k++) {
          totalDistance += Math.abs(students[k][0] - meetX) + Math.abs(students[k][1] - meetY);
        }
  
        // 최소 거리 갱신
        if (totalDistance < minDistance) {
          minDistance = totalDistance;
        }
      }
    }
  
    return minDistance;
  }