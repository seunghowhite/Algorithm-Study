// function solution(k, m, score) {
//     let answer = 0;
//     const sortApple =score.sort((a,b)=>b-a)
//     for(let i=0;i < sortApple.length;i+=m){
//         if(sortApple[i+m-1]){
//             answer +=sortApple[i+m-1]*m
//         }
//     }
//     return answer;
// }
solution = (_, m, s) => s.sort().filter((_, i) => !((s.length - i) % m)).reduce((a, v) => a + v, 0) * m