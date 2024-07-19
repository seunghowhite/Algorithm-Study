//2024-07-19
function solution(x) {
    const sum = x.toString().split("").reduce((acc,cur)=>Number(acc)+Number(cur),0)
    return x%sum?false:true;
}










//2023-03-20
// function solution(x) {
//     var answer = true;
//     let N=0;
//     let NUM=[]
//     let StringfromN =String(x)
//     let split=StringfromN.split('')
//     for(let i=0;i<split.length;i++){
//         NUM.push(Number(split[i]))
//     }
    
//     for(let z=0;z<NUM.length;z++){
//        N=N+NUM[z]
//         if(x%N==0){
//             answer=true
//         }else{
//             answer=false
//         }
//     }
    
    

//     return answer;
// }