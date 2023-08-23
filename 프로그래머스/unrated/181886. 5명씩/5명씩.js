function solution(names) {
    let answer = names.filter((item,index)=>index%5==0)
    return answer;
}