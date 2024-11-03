// 2024-11-1
function solution(dartResult) {
    let answerArray = [];
    let tempNumber = 0;

    dartResult.split("").forEach((item) => {
        if (!isNaN(item)) { // 숫자일 경우
            tempNumber += item; // 두 자리 숫자 처리를 위해 숫자를 누적
        } else {
            if (tempNumber) {
                // 현재까지의 숫자를 배열에 넣고 초기화
                answerArray.push(Number.parseInt(tempNumber));
                tempNumber = 0
            }
            switch (item) {
                case 'S':
                    break;
                case 'D':
                    answerArray[answerArray.length - 1] **= 2; // 제곱 처리
                    break;
                case 'T':
                    answerArray[answerArray.length - 1] **= 3; // 세제곱 처리
                    break;
                case '*':
                    answerArray[answerArray.length - 1] *= 2;
                    if (answerArray.length > 1) {
                        answerArray[answerArray.length - 2] *= 2;
                    }
                    break;
                case '#':
                    answerArray[answerArray.length - 1] *= -1;
                    break;
            }
        }
    });

    return answerArray.reduce((acc, curr) => acc + curr, 0);
}










// 2023-03-20
// function solution(dartResult) {
//   var answer = 0;
//   let Num = [];
//   let NumStore = 0;
//   for (let i = 0; i < dartResult.length; i++) {
//     if(dartResult[i]>=0&&dartResult[i] <= 9 ){
//         if(dartResult[i]==1&&dartResult[i+1]==0){
//             NumStore=10
//             i++;
//         }else{
//             NumStore=dartResult[i]
//         }
    
//     } else if(dartResult[i] === "S") { 
//             Num.push(Number(NumStore));

//     } else if (dartResult[i] === "D") {  
//             Num.push(Math.pow(NumStore,2));

//     } else if (dartResult[i] === "T") { 
//             Num.push(Math.pow(NumStore,3));
     
//     } else if (dartResult[i] === "#") {
//             Num[Num.length-1] *= -1;
  
//     } else if (dartResult[i] === "*") { 
//             Num[Num.length-1] *= 2;
//             Num[Num.length-2] *= 2;
       
//     }
//   }
//   answer =Num.reduce((acc,curr)=>acc+curr,0)
//   return answer;
// }
