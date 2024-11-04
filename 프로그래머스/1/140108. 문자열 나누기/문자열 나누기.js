//2024-11-04
function solution(s) {
    let answer = 0;
    let current;
    let count = 0;

    for(let i = 0; i < s.length; i++) {
        if(count === 0) {
            answer++;
            current = s[i]
            count = 1
        } else {
            if(current !== s[i]) count--;
            else count++;
        }
    }

    return answer;
}



//2023-03-20
// function solution(s) {
//   let answer = 0;
//   let fristStr = "";
//   let outherStr = "";
//   for (let i = 0; i < s.length; i++) {
//     if (fristStr == "") {
//       fristStr = s[i];
//       continue;
//     }
//     if (s[i] === fristStr[0]) {
//       fristStr = fristStr + s[i];
//     } else if (s[i] !== fristStr[0]) {
//       outherStr += s[i];
//       if (fristStr.length === outherStr.length) {
//         fristStr = "";
//         outherStr = "";
//         answer++;
//       }
//     }
//   }
  
//   if (fristStr !== "") {
//     answer++;
//   }

//   return answer;
// }
