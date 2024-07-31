//2024-07-31
function solution(numbers) {
    let answer = 0;
    for(let i=0; i<10; i++){
        if(!numbers.includes(i)) answer += i;
    } 
    
    return answer;
}







//2023-03-20


// function solution(numbers) {
//     var answer = 0;
//     for(var i=0;i<=9;i++){
//         if(numbers.includes(i)){
//             continue
//         }else{
//             answer=answer+i
//         }
//     }
//     return answer;
// }