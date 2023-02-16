function solution(participant, completion) {
    var answer ='';
    participant.sort();
    completion.sort();
    for(let i=0; i<participant.length;i++){
         if(participant[i]!==completion[i]){
             return participant[i]
         }
    }
    
    
    return answer;
}













// function solution(participant, completion) {
//     var answer = '';
// //     map을 사용해 이름이 같은게 있으면 value값에 +1해주자.
//     let myObj =participant.map(part=>part+1)
//     console.log( '결과값★:', myObj)

// //     map을 사용해서 completion의 요소와 이름이 같으면 value값에 -1을 해주자.
    
// //     map을 사용해서 0인 값들을 가지고 오자.

    
// //     그리고 출력하자.
//     return answer;
// }