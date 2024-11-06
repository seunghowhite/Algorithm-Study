function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for(let i in participant) {
        if(participant[i] !== completion[i]) return participant[i];
    }
 
}

//2024-11-07  (효율성문제)
// function solution(participant, completion) {
//     let participantFilter = participant
//     completion.forEach((completion)=>{
//         const indexOfCompletion =participant.indexOf(completion)
//         if( indexOfCompletion !== -1 ){
//             participantFilter.splice(indexOfCompletion,1)          
//         }
//     })
//     return participantFilter[0];
// }









//2023-03-20
// function solution(participant, completion) {
//     var answer = '';
    
//     let objpar =participant.reduce((acc,cur)=>{
//          acc[cur] = (acc[cur] || 0) + 1;
//         return acc;
//     },{});
//     console.log("reduce를 사용하여 obj를 만든 상태:",objpar)
    
//     completion.forEach((person)=>objpar[person]--)
//     console.log("forEach사용,obj의 값을 변경한 상태:",objpar)
    
//     for(let person in objpar){
//        if(objpar[person]!==0){
//            return person
//        }     
//     }
// }






// 그전 코드
// function solution(participant, completion) {
//     var answer ='';
//     participant.sort();
//     completion.sort();
//     for(let i=0; i<participant.length;i++){
//          if(participant[i]!==completion[i]){
//              return participant[i]
//          }
//     }
//     return answer;
// }
