//2024년 7월 29일
function solution(num) {
    let answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
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