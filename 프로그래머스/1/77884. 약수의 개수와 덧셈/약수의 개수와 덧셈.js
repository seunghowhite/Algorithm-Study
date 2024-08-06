//2024-08-06
function solution(left, right) {
    let answer = 0;
    const isEvenOddNum =(num)=>{
         let result = []
         let index = 1;
         while (index <= num / 2) {
            if (num % index === 0) result.push(index)
          index++
         }
        result = [...result, num]
        return result.length%2===0?num:-num  
    }
    
    for(let i =left; i<=right; i++){
        answer +=isEvenOddNum(i)
    }
    
    return answer;
}








//2023-03-20
// function solution(left, right) {
//     var answer = 0;
//     for(let i=left ;i<=right; i++ ){    
//         let count = 0;
//         for(let j =0; j<=i; j++){
//             if(i%j===0){
//                 count+=1
//             }
//         }
//         if(count%2==0){
//             answer+=i
//         }else{
//             answer-=i
//         }
//     }
//     return answer;
// }