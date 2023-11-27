function solution(x, n) {
    let answer = [];
    for (let i=0;i<n;i++){
        if(answer[i-1]==null){
             answer.push(x) 
        }else{
             answer.push(answer[i-1]+x)
        }
       
    }
    return answer;
}