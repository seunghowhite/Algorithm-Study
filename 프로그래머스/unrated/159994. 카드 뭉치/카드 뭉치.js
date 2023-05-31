function solution(cards1, cards2, goal) {
    let answer = "Yes";
    let cd1 =[...cards1]
    let cd2 =[...cards2]
    
    for(let i=0;i<goal.length;i++){
        if(goal[i]==cd1[0]){
            cd1.shift()
            continue
        }else if(goal[i]==cd2[0]){
            cd2.shift()
            continue
        }
        answer ="No"
        break
    }
    
    return answer;
}