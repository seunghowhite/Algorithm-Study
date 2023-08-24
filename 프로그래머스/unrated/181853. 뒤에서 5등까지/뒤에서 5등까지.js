function solution(num_list) {
    const answer = num_list.sort((a,b)=>a-b).splice(0,5);
    return answer;
}