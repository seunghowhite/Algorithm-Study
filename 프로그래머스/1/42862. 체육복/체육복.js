// 2024-11-08
function solution(n, lost, reserve) {
    // 잃어버린 학생 중 여벌이 있는 학생 제거
    let noReserveLost = lost.filter(student => !reserve.includes(student)).sort((a,b)=>a-b);
    let hasReserve = reserve.filter(student => !lost.includes(student)).sort((a,b)=>a-b);

    // 체육복을 빌려준 학생들 추적
    for (const student of hasReserve) {
        const leftNeighborIndex = noReserveLost.indexOf(student - 1);
        const rightNeighborIndex = noReserveLost.indexOf(student + 1);

        if (leftNeighborIndex !== -1) {
            noReserveLost.splice(leftNeighborIndex, 1); // 왼쪽 학생에게 빌려줌
        } else if (rightNeighborIndex !== -1) {
            noReserveLost.splice(rightNeighborIndex, 1); // 오른쪽 학생에게 빌려줌
        }
    }

    // 전체 학생 수에서 체육복이 없는 학생 수를 뺌
    const answer = n - noReserveLost.length;
    return answer;
}












// 2023-03-20
// function solution(n, lost, reserve) {
    
//     let answer = 0;
//     const noReserveLost = lost.sort((a,b)=>a-b).filter((lost) => !reserve.includes(lost));
//     let hasReserve = reserve.sort((a,b)=>a-b).filter((reverse) => !lost.includes(reverse));
    
//     const finalLost = noReserveLost.filter((lost) => {
//         const lend = hasReserve.find((reserve) => Math.abs(reserve - lost) == 1);
//         if(!lend) return lost;
        

//         hasReserve = hasReserve.filter((reverse) => reverse !== lend);
//     })
  

//     answer = n - finalLost.length;
    
//     return answer;
// }