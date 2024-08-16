//2024-08-16
function solution(array, commands) {
    let answer = [];
    commands.forEach((command)=>{
        const sliceArry =array.slice(command[0]-1,command[1]).sort((a,b)=>a-b)
        answer.push(sliceArry[command[2]-1])
    })
    return answer
}









//2023-03-20
// function solution(array, commands) {
//     let answer = [];
//     commands.forEach((item)=>{
//         const sliceArry =array.slice(item[0]-1,item[1]).sort((a,b)=>a-b)
//         answer.push(sliceArry[item[2]-1])
//     })
//     return answer;
// }