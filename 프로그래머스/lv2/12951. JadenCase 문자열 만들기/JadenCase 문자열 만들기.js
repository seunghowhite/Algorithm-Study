function solution(s) {
    let answer = '';
    s.split(" ").forEach((str) => {
        answer += " "+str.charAt(0).toUpperCase() +  str.slice(1).toLowerCase();
    });
    return answer.slice(1);

}
