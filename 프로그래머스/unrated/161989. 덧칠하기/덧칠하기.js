function solution(n, m, section) {
    var answer = 0;
    let wall =[]
    for(let i =1 ;i<=n;i++){
        const redo =!section.includes(i)
        wall.push(redo)
    }
     for(let j = 0 ; j < wall.length ; j++) {
        if(!wall[j]) {
            answer += 1
            j += m-1
        }    
    }
    
    return answer;
}

