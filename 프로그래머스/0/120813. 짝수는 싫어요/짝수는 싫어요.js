// 2024-07-02
function solution(n) {
    let answer=[]
    for(let i=1;i<=n;i+=2){
        answer.push(i)    
    }
    
    return answer.sort((a,b)=>a-b);
}