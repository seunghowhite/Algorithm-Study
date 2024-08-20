//2024-08-20
function solution(n, arr1, arr2) {
    let answer = [];
    
    for (let i = 0; i < n; i++) {
  
        let arr1Bi = arr1[i].toString(2).padStart(n, '0');
        let arr2Bi = arr2[i].toString(2).padStart(n, '0');
        
        let answerRow = "";

        for (let j = 0; j < n; j++) {
            if (arr1Bi[j] === '0' && arr2Bi[j] === '0') {
                answerRow += " ";
            } else {
                answerRow += "#";
            }
        }

        answer.push(answerRow);
    }
    
    return answer;
}














//2023-03-20
// function solution(n, arr1, arr2) {
//   //문자 변환기
//   const changeshap = (arr) => {
//     const shapArr = arr.map((item) => {
//       let binary = item.toString(2);
//       if (binary.length < n) {
//         binary = "0".repeat(n - binary.length) + binary;
//       }
//       return binary.split("");
//     });
//     return shapArr;
//   };
//   //맵 합치기
//   let SecretMap = [];
//   for (let i = 0; i < n; i++) {
//     let oneline = "";
//     for (let j = 0; j < n; j++) {
//       if (changeshap(arr1)[i][j] === "1" || changeshap(arr2)[i][j] === "1") {
//         oneline += "#";
//       } else {
//         oneline += " ";
//       }
//     }
//     SecretMap.push(oneline);
//   }

//   return SecretMap;
// }
