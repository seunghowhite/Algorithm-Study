//2024-11-05
function solution(s, skip, index) {
    let answer = '';
    let alphabetStr = [...'abcdefghijklmnopqrstuvwxyz'].filter(item => ![...skip].includes(item));
    
    for(let j=0;j<s.length;j++){
        const addIndex = alphabetStr.indexOf(s[j])+index;
        const targetIndex = addIndex % alphabetStr.length;
        answer+=alphabetStr[targetIndex]
    }
    return answer;
}









//2023-03-20
// function solution(s, skip, index) {
//     let answer = '';
//     let str = "abcdefghijklmnopqrstuvwxyz"
//     for(let i=0;i<skip.length;i++){
//         str =str.replaceAll(skip.split("")[i],"");
//     }
    
//     for(let j=0;j<s.length;j++){
//         const position = str.indexOf(s[j]);
//         const targetIndex = (position + index) % str.length;
//         answer+=str.charAt(targetIndex);
//     }
  
//     return answer;
// }