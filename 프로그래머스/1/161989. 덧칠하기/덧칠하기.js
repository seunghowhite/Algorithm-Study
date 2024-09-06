//2024-09-06
function solution(n, m, section) {
    let part = 0;
    let count = 0;
    for (const num of section) {
        if (num > part) {
            part = num + m - 1;
            count++;
        }
        if (part > n)
            break;
        }
    return count;
}






//2023-03-20
// function solution(n, m, section) {
//     var answer = 0;
//     let wall =[]
//     for(let i =1 ;i<=n;i++){
//         const redo =!section.includes(i)
//         wall.push(redo)
//     }
//      for(let j = 0 ; j < wall.length ; j++) {
//         if(!wall[j]) {
//             answer += 1
//             j += m-1
//         }    
//     }
    
//     return answer;
// }

