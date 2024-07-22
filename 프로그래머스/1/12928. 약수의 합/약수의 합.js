//2024년 7월 22일
function solution(n) {
  let num = n;
  let answer = 0
  while(0 < n){
    if(num % n === 0){
        answer+=n
    }
    n--
  }
    return answer
}









//2023년 11월 27일
// function solution(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) sum += i
//     }
//     return sum
// }