//2024-08-12
function solution(n) {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}










//2023-03-20
// function solution(n) {
//     var answer = 0;
//     let s = n.toString(3);
//     s = String(s).split("").reverse().join("");
//     console.log('출력값:',s)
//     answer = parseInt(s, 3);
//     return answer;
// }