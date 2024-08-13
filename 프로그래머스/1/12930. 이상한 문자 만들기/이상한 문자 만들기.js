//2024-08-13
function solution(s) {
    const answer = s.split(" ").map((str)=>{
         return str.split("").map((word,index)=>{
            if(index ===0||index%2===0){
                return word.toUpperCase();
            }else{
                return word.toLowerCase();
            }
        }).join("")
    });
    return answer.join(" ");
}








//2023-03-20
// function solution(s) {
//     let word=s.split(' ')
//     let answer = '';
    
//     for(let i=0; i<word.length;i++){
//         for(let z=0;z<word[i].length;z++){
//             if(z%2===0){
//                 answer+=word[i][z].toUpperCase();
//             }else{
//                 answer+=word[i][z].toLowerCase();
//             }
//         }
//         if (i < word.length -1) {
//             answer += ' ';
//         }
//     }
    
//     return answer;
// }