function solution(money) {
    var answer = [];
    if(money/5500>0){
        let mon=Math.trunc(money/5500)
        answer.push(mon,money-(5500*mon))
    }
    return answer;
}