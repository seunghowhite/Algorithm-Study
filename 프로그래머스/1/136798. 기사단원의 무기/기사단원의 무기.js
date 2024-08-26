//2024-08-26
function solution(number, limit, power) {
    let answer = 0; 
    for (let i = 1; i <= number; i++) {
        let count = 1;
        let divisorCount = 0;
        while (count <= i/2) {  
            if (i % count === 0) divisorCount++;  
            count++;
        }        
        const editnum = divisorCount+1 > limit ? power : divisorCount+1;  
        answer += editnum;  
    }
    return answer;  
}









//2023-03-20
// function solution(number, limit, power) {
//     let answer = 0;
//     const yakSuCnt =(num)=>{
//         let cnt = 1
//         let index =1
//         while(index<=num/2){
//             if(num%index==0) cnt++
//             index++
//         }
//         const editnum=cnt>limit?power:cnt
//         answer+=editnum
//     }
    
//     for(let i =1;i<=number;i++){
//         yakSuCnt(i)
//     }

//     return answer;
// }