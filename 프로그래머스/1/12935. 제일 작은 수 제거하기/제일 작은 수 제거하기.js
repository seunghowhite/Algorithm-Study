//2024-08-02
function solution(arr) {
    return arr.length ===1? [-1]:arr.filter((num)=>{
        return  num !==Math.min(...arr)
    });
}










//2023-03-20
// function solution(arr) {
//     var answer = [];
//     var min = Math.min.apply(null, arr);
    
//     for(let i=0;i<arr.length;i++){
        
//         if(arr[i]==min){
//             continue
//         }
//         answer.push(arr[i])
//     }
//     if(arr.length==1){
//         answer.push(-1)
//     }
//     return answer;
// }