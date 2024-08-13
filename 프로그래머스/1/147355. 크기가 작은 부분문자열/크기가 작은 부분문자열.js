function solution(t, p) {
    let answer =0
    const Tleng =t.length
    const Pleng =p.length
    for(let i =0 ; i<=Tleng-Pleng; i++){
        const piceNum =t.slice(i,i+Pleng)
        if(piceNum<=p){
            answer++
        }
    }
    return answer;
}








//2023-03-20
// function solution(t, p) {
//     let answer = 0;
//     for(let i=0; i<=t.length-p.length;i++){
//         if(t.slice(i,i+p.length)<=p){
//             answer++
//         }
//     }
//     return answer;
// }