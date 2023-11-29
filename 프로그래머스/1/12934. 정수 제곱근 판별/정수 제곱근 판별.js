//2023년 11월 30일
function solution(n){
    let result = 0;
    let sprtNum = Math.sqrt(n);
    result = Number.isInteger(sprtNum) ? Math.pow(sprtNum+1, 2) : -1;
    return result;
}

//그전코드
// function solution(n) {
//     var answer = 0;
//     let subnum =0
//     // Math.sqrt(n)루트 구하는법
//      // Math.pow(값, 제곱승)
//     if(Number.isInteger(Math.sqrt(n))){
//         subnum=Math.sqrt(n)+1
//         answer=Math.pow(subnum,2)
//     }else{
//         answer =-1
//     }
//     return answer;
// }