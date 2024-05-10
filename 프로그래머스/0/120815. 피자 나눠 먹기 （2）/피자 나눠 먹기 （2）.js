function solution(n) {
    let answer = 0;
    while (true){
        answer+=1
        if((6*answer)%n===0){
            break
        }
    }
    return answer;
}