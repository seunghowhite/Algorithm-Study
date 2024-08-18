//2024-08-18
function solution(food) {
    let answer = '';
    food.forEach((num,index)=>{
        answer=answer.concat(String(index).repeat(Math.trunc(num/2)))
    })
    answer=answer.concat(`0${answer.split("").reverse().join("")}`)
    return answer;
}












//2023-03-20
// function solution(food) {
//     let answer = '0';
//     let strings =""
//     food.forEach((item,index)=>{
//         if(item>=2){
//             for(let i =0;i<parseInt(item/2);i++){
//                 strings = index + strings 
//             }
//         }
//     })
//     answer =strings.split("").reverse().join("")+answer+strings
//     return answer;
// }