//2024-08-06
function solution(a, b) {
    return a.reduce((acc,cur,index)=>acc+cur*b[index],0);
}









//2023-03-20
// function solution(a, b) {
//     var answer = 0;
//     for(let i=0;i<a.length;i++)
//         answer+=(a[i]*b[i])
//     return answer;
// }