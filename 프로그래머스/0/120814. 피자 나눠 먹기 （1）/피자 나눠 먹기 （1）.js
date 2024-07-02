// 2024-07-02
function solution(n) {
    var answer = 0;
    if(n<7){
        answer =1
    }else {
        answer = Math.ceil(n/7)
    }
    return answer;
}