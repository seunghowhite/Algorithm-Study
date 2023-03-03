function solution(numbers, direction) {
    var answer = numbers;
    
    if(direction==='right'){
        answer.unshift(numbers[numbers.length-1])
        answer.pop()
    }else{
        answer.push(numbers[0])
        answer.shift()
    }
    return answer;
}