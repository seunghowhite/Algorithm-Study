// 2024-10-23
function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let clearedPlayer = stages.filter((x) => x >= i).length;
        let notClearPlayer = stages.filter((x) => x === i).length;
        result.push([i, notClearPlayer/clearedPlayer]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}





// 2023-03-20
// function solution(N, stages) {
//     let result = [];
//     for(let i=1; i<=N; i++){
//         let reach = stages.filter((x) => x >= i).length;
//         let curr = stages.filter((x) => x === i).length;
//         result.push([i, curr/reach]);
//     }
//     result.sort((a,b) => b[1] - a[1]);
//     return result.map((x) => x[0]);
// }