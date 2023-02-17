function solution(participant, completion) {
    var answer = '';
    
    let objpar =participant.reduce((acc,cur)=>{
         acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    },{});
    
    completion.forEach((person)=>objpar[person]--)
    
    
    for(let person in objpar){
       if(objpar[person]!==0){
           return person
       }     
    }
}






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
