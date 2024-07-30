//2024년 7월 30일
function solution(absolutes, signs) {
    return absolutes.reduce((acc, cur, idx) => {
        return signs[idx] ? acc + cur : acc - cur;
    }, 0); 
}









//2023-03-20
// function solution(absolutes, signs) {
//     var answer = 0;
//     for(var i=0;i<absolutes.length;i++){
//         if(signs[i]){
//             answer=answer+absolutes[i]
//         }else{
//             answer=answer-absolutes[i]
//         }
//     }
//     return signs[1];
// }