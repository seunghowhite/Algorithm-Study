//2024-08-16
function solution(numbers) {
    let answer = [];
    numbers.forEach((number,index)=>{
            numbers.slice(index+1).forEach((secondNumber)=>{
                const sumNumber = number+secondNumber
                if(!answer.includes(sumNumber)){
                    answer.push(sumNumber)
                }   
            })  
        
    })
    return answer.sort((a,b)=>a-b);
}









//2023-03-20
// function solution(numbers) {
//     var answer = [];
//     let sub =[];
// //  값을 다 더해주기. 그다음 just에 넣었음.
//     numbers.forEach((num,index)=>{
//         for(let i=index+1;i<numbers.length;i++)
//             sub.push(num+numbers[i])
//             // console.log('<i는:',i,'>  <num는:',num,'>  <numbers[i]는',numbers[i],'> <둘다 더한값:',num+numbers[i])
//     });
    
// //  오름차순 정렬하기
//     let sort_num=sub.sort((a,b)=>a-b);
// //  중복값 빼주기.
//     answer=sub.filter((num,index)=>num!=sort_num[index+1]);  

//     return answer;
// }
