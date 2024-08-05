//2024-08-05
function solution(n) {
    const lengthArray =Array.from({ length: n }, (_, index) => index + 1);
    return lengthArray.map(num=>num%2==0?"박":"수").join("");
}








//2023-03-20
// function solution(n) {
//     var answer = '';
//     if(n%2==0){
//         for(let i=0;i<n/2;i++){
//             answer+='수박'
//         }
//     }else if(!(n%2==0)){
//         answer='수'
//         for(let i=0;i<n/2-0.5;i++){
//             answer+='박수'
//         }
//     }
//     return answer;
// }

