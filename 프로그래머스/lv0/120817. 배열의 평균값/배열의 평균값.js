function solution(numbers) {
    var answer = 0;
    let addnumber=0;
    for(let i=0;i<numbers.length;i++){
        addnumber+=numbers[i]
        answer=addnumber/numbers.length
    }
    return answer;
}