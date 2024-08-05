//2024-08-05
function solution(s) {
    const length= s.length;
    return  length%2==0 ? s.slice(length/2-1, length/2+1) : s.slice(length/2, length/2+1);
}









//2023-03-20
// function solution(s) {
//     var size= s.length;
//     return  size%2==0 ? s.slice(size/2-1, size/2+1) : s.slice(size/2, size/2+1);
// }



// // 그전 코드
// function solution(s) {
//     var answer = '';
//     var size= s.length;
//     if(size%2==0){
// //  단어가 짝수 일때
//     answer=s.slice(size/2-1, size/2+1)
//     }else{
// //  단어가 홀수일때
//     answer=s.slice(size/2, size/2+1)
//     }
//     return answer;
// }