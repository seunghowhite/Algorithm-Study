function solution(n_str) {
    let answer = '';
    for(const num of n_str){
        const index = n_str.indexOf(num);
        if(num!=="0"){
            answer =n_str.slice(index)
            break
        }
    }
    return answer;
}