function solution(arr, queries) {
    let answer = arr;
    queries.forEach(([start,end])=>{
        const startTem = answer[start]
        answer[start] = answer[end]
        answer[end] =startTem
    })
    return answer;
}