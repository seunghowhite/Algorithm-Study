// 2024-08-22
function solution(k, score) {
    let answer = [];
    score.forEach((item,index)=>{
        const slicedArray = score.slice(0,index+1).sort((a,b)=>b-a)
        if(index+1<=k){
            answer.push(slicedArray[slicedArray.length-1])
        }else{
            answer.push(slicedArray[k-1])
        }
    })
    return answer;
}






// 2023-03-20
// function solution(k, score) {
//     const stack = []
//     return score.reduce((a,c) => {
//         if(stack.length < k) {
//             stack.push(c)
//             stack.sort((a,b) => a - b)
//         }
//         else {
//             stack.push(c)
//             stack.sort((a,b) => a - b)
//             stack.shift()
//         }
//         console.log(stack)
//         a.push(stack[0])
//         return a
//     },[])
// }