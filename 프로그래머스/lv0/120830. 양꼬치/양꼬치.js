function solution(n, k) {
    var answer = 0;
    let yang = n*12000 ,drink =k*2000,s = parseInt(yang/120000)
    answer=yang+drink-(s*2000)
    return answer;
}