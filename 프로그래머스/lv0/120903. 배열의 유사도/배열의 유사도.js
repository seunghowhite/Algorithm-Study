

function solution(s1, s2) {
    const filters = s1.filter((x) => s2.includes(x));
    return filters.length;
}

















// function solution(s1, s2) {
//     var answer = 0;
//     s1.forEach((sone)=>{
//        for(let i=0; i<s2.length;i++){
//            if(sone==s2[i]){
//                ++answer
//            }
//        }
//     })
//     return answer;
// }