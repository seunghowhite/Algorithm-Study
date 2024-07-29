//2024년 7월 29일
function solution(num, count = 0) {
    // 종료조건1
    if (num === 1) {
        return count;
    }
    // 종료조건2
    if (count >= 500) {
        return -1;
    }
    // 현재 숫자가 짝수인 경우
    if (num % 2 === 0) {
        return solution(num / 2, count + 1);
    } else {
        // 현재 숫자가 홀수인 경우
        return solution(num * 3 + 1, count + 1);
    }
}










// //2023-03-20
// function solution(num) {
//     var answer = num;
//     let count =0;
    
//     do{
//         if(answer%2==0){
//             answer=answer/2
//             count=count+1
//         }else if(answer%2==1){
//             answer=answer*3+1
//             count=count+1
//         }
//         console.log(answer)
//     }     
//     while (!(answer==1))
        
//     if(num==1){
//         count=0
//     }if(count>=500){
//         count=-1
//     }
//     return count;
// }