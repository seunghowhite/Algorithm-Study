//2024 7월 18일
function solution(n){
    return n.toString().split("").reduce((cur,acc)=>cur+Number(acc),0);
}










//2023년 11월 28일
// function solution(n){
//   return n.toString().split("").reduce((cur,acc)=>cur+Number(acc),0);
// }






//이전코드
// function solution(n)
// {   let answer=0
//     var StringNUM= String(n);
//     let split = StringNUM.split('');   
//     for(let i=0;i<split.length;i++){
//         answer+=Number(split[i])
//     }
//     return answer;
// }