//2024-08-12
function solution(d, budget) {
    let num = 0
    let count =0
    d.sort((a,b)=>a-b).forEach((item)=>{
        if(num+item<=budget){
          num += item
          count+=1
        }
    })
    return count;
}




//2023-03-20
// function solution(d, budget) {
//     let answer = 0;
//     const sortArry = d.sort((a,b)=>a-b)
//     let de =budget
//     for( let i=0; i<sortArry.length;i++){
//         if(sortArry[i]<=de){
//             answer+=1
//             de-=sortArry[i]
//         } 
//     }
//     return answer;
// }