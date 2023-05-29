function solution(k, score) {
    let stack = [];
    let ans = [];
    
    for(let i = 0; i < score.length; i++){
        const eachScore = score[i];
        
        if(stack.length < k){
            stack.push(eachScore);
            ans.push(Math.min(...stack));
            continue;
        }
        
        if(Math.min(...stack) >= eachScore){
            ans.push(Math.min(...stack));
            continue;
        }
        
        stack.sort((a, b) => b - a);
        stack.pop();
        stack.push(eachScore);
        ans.push(Math.min(...stack));
    }
    
    return ans;
}