function solution(cipher, code) {
    var answer = cipher.split('').filter((v,i)=>(i+1)%code===0).join('');
    
    
    return answer;
}

//기존코드
// function solution(cipher, code) {
//     var answer = [];
//     let firstcode=code
//     cipher.split('').forEach((spell,index)=>{
//         console.log(spell,index,firstcode-1)
//         if(firstcode-1==index){
//             answer.push(spell)
//             firstcode+=code
//         }
//     })
//     return answer.join('');
// }