//2024-08-14
function solution(number) {
    let answer = 0;
    for(let i1=0;i1<number.length-2;i1++){
         for(let i2=i1+1;i2<number.length-1;i2++){
             for(let i3=i2+1;i3<number.length;i3++){
                 if(number[i1]+number[i2]+number[i3]===0)answer++
            }   
        }
    }
    return answer;
}









//2023-03-20
// function solution(number) {
//     var answer = 0;
//     for(let i=0; i<number.length; i++){
//         for(let j=i+1; j<number.length; j++){
//             for(let k=j+1; k<number.length; k++){
//                 if(number[i] + number[j] + number[k] === 0){
//                     answer += 1;
//                 }
//             }
//         }
//     }
//     return answer;
// }