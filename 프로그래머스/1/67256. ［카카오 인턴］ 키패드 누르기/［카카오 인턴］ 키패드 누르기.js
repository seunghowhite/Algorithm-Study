//2024-11-13
function solution(numbers, hand) {
    let answer = '';
    let RH = { row: 3, col: 2 }; // 오른손 위치 초기값 (# 위치)
    let LH = { row: 3, col: 0 }; // 왼손 위치 초기값 (* 위치)

    const pos = { 
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };

    for (let number of numbers) {
        const [row, col] = pos[number]; // 현재 번호 위치의 행, 열 좌표

        // 왼쪽 열(1, 4, 7)은 무조건 왼손 사용
        if (col === 0) {
            answer += 'L';
            LH = { row, col };
        }
        // 오른쪽 열(3, 6, 9)은 무조건 오른손 사용
        else if (col === 2) {
            answer += 'R';
            RH = { row, col };
        }
        // 중간 열(2, 5, 8, 0)은 거리 계산 후 결정
        else {
            const leftDist = Math.abs(LH.row - row) + Math.abs(LH.col - col);
            const rightDist = Math.abs(RH.row - row) + Math.abs(RH.col - col);

            if (leftDist < rightDist) {
                answer += 'L';
                LH = { row, col };
            } else if (rightDist < leftDist) {
                answer += 'R';
                RH = { row, col };
            } else {
                // 거리가 같으면 사용자의 손잡이에 따라 결정
                if (hand === 'right') {
                    answer += 'R';
                    RH = { row, col };
                } else {
                    answer += 'L';
                    LH = { row, col };
                }
            }
        }
    }

    return answer;
}












// function solution(numbers, hand) {
//   let answer = '';
//   let LhandPosition = '*';
//   let RhandPosition = '#';

//   const LeftHandle = [1, 4, 7];
//   const RightHandle = [3, 6, 9];

//   const Position = {
//     2: [1, 3, 5],
//     5: [ 2,  4, 6,  8 ],
//     8: [ 5,  7, 9,  0],
//     0: [ 8, '*', '#']
//   };

//   const checkMiddleHandle = (x) => {
//     const Lboolean = Position[x].includes(LhandPosition);
//     const Rboolean = Position[x].includes(RhandPosition);
//     if (Lboolean && !Rboolean) {
//       LhandPosition = x;
//       return 'L';
//     } else if (Rboolean && !Lboolean) {
//       RhandPosition = x;
//       return 'R';
//     } else if (Lboolean && Rboolean) {
//       const RL = hand == 'right' ? 'R' : 'L';
//       if (RL == 'R') {
//         RhandPosition = x;
//       } else {
//         LhandPosition = x;
//       }
//       return RL;
//     }else{
        
//     }
//   };

//   const checkLRHandle = (x) => {
//     if (LeftHandle.includes(x)) {
//       LhandPosition = x;
//       return 'L';
//     } else if (RightHandle.includes(x)) {
//       RhandPosition = x;
//       return 'R';
//     } else {
//       return '';
//     }
//   };

//   for (let i = 0; i < numbers.length; i++) {
//     const check = checkLRHandle(numbers[i]);
//     if (check !== '') {
//       answer += check;
//     } else {
//       const middleCheck = checkMiddleHandle(numbers[i]);
//       answer += middleCheck;
//     }
//   }

//   return answer;
// }


// function solution(numbers, hand) {
    
//     function dis(num, lH, rH, pos, hand){
//     const lD = Math.abs(pos[lH][0] - pos[num][0]) + 
//         Math.abs(pos[lH][1] - pos[num][1])
//     const rD = Math.abs(pos[rH][0] - pos[num][0]) + 
//         Math.abs(pos[rH][1] - pos[num][1])
    
//     if (lD === rD) return hand === 'left' ?  'L' : 'R';
//     return lD < rD ? 'L' : 'R'
// }

//     const pos = {
//         1: [0, 0], 2: [0, 1], 3: [0, 2],
//         4: [1, 0], 5: [1, 1], 6: [1, 2],
//         7: [2, 0], 8: [2, 1], 9: [2, 2],
//         '*': [3, 0], 0: [3, 1], '#': [3, 2]
//     };
//     var lH = '*', rH = '#';
//     var result = ''
//     for (var num of numbers){
//         if (num % 3 === 1){
//             result += 'L';
//             lH = num;
//         }
        
//         else if (num !==0 && num % 3 === 0){
//             result += 'R';
//             rH = num;
//         }
//         else{
//             result += dis(num, lH, rH, pos, hand)
//             result[result.length-1] === 'L'? lH = num : rH = num
//         }
//     }

//     return result;
// }
