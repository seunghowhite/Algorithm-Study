function solution(numbers) {
    let sortn =numbers.sort((a,b)=>b-a)
    return sortn[0]*sortn[1];
}