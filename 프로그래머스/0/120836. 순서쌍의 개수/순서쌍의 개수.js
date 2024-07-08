//2024-07-08
function solution(n) {
    var answer = 0;
    let i = 1
    while(i<=n){
        if(n%i===0){
            answer+=1
        }
        i++
    }
    return answer;
}