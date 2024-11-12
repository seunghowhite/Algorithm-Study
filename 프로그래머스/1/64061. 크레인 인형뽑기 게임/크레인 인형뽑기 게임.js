//2024-11-12
function solution(board, moves) {
    let pop = 0;
    let stack = [];
    for (let move of moves) {
        const point = move - 1;
        
        // 각 move에 대해 board를 순회하며 인형 찾기
        for (let map of board) {
            if (map[point] !== 0) {
                stack.push(map[point]);    // 인형 추가
                map[point] = 0;            // 인형을 뽑은 자리는 0으로 바꿈

                const sLeng = stack.length;
                
                // stack의 마지막 두 요소가 같다면
                if (sLeng > 1 && stack[sLeng - 1] === stack[sLeng - 2]) {
                    pop++;                          // 연속된 인형 쌍 제거 횟수 증가
                    stack.splice(sLeng - 2, 2);     // 인형 두 개 제거
                }
                
                break; // 인형을 찾으면 다음 move로 이동
            }
        }
    }
    
    return pop * 2; // 제거된 인형의 총 개수를 반환
}








//2023-03-20
// function solution(board, moves) {
//   let answer = 0;
//   let boards = board;
//   let dolls = [];
//   moves.forEach((move) => {
//     for (let i = 0; i < boards.length; i++) {
//       if (boards[i][move - 1] !== 0) {
//         dolls.push(boards[i][move - 1])      
//         boards[i].splice(move - 1, 1, 0);
//         break;
//       }
//     }
//   });

    
//   for(let j=0;j<dolls.length;j++){
//       if(dolls[j]==dolls[j+1]){
//           dolls.splice(j,2)
    
//           answer+=2
//           j=-1

//       }
//   } 
    
//   return answer;
// }
