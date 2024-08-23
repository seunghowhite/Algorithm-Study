//2024-08-23
function solution(cards1, cards2, goal) {
    let cards1Index = 0;
    let cards2Index = 0;
    for(let i=0;i<goal.length;i++){
        if(goal[i] == cards1[cards1Index]) cards1Index++;
        else if(goal[i] == cards2[cards2Index]) cards2Index++;
        else return "No"
    }
    return "Yes";
}







//2023-03-20
// function solution(cards1, cards2, goal) {
//     let answer = "Yes";
//     let cd1 =[...cards1]
//     let cd2 =[...cards2]
    
//     for(let i=0;i<goal.length;i++){
//         if(goal[i]==cd1[0]){
//             cd1.shift()
//             continue
//         }else if(goal[i]==cd2[0]){
//             cd2.shift()
//             continue
//         }
//         answer ="No"
//         break
//     }
    
//     return answer;
// }