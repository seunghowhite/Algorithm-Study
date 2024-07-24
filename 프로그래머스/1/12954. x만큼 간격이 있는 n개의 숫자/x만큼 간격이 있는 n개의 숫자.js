//2024-07-28
function solution(x, n) {
    let answer = [];
    let pushCount =x
    while(answer.length!==n){
        answer.push(pushCount)
        pushCount+=x
    }
    return answer;
}









//2023-03-20
// 내코드
// function solution(x, n) {
//     let answer = [];
//     for (let i=0;i<n;i++){
//         if(answer[i-1]==null){
//              answer.push(x) 
//         }else{
//              answer.push(answer[i-1]+x)
//         }
       
//     }
//     return answer;
// }

// 다른사람 코드
// function solution(x, n) {
//     var answer = [];
//     for (let i = 1; i <= n; i++) {
//         answer.push(x*i)
//     }
//     return answer;
// }