function solution(n) {
    var answer = 0;
    let s = n.toString(3);
    s = String(s).split("").reverse().join("");
    console.log('출력값:',s)
    answer = parseInt(s, 3);
    return answer;
}