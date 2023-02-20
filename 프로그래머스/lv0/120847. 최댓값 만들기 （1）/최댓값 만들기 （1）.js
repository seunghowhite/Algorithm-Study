function solution(numbers) {
    let sort =numbers.sort((a,b)=>a-b)
    let answer= sort[sort.length-1]*sort[sort.length-2]
    return answer;
}