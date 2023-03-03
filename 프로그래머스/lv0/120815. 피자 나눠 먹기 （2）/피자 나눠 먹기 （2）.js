function solution(n) {
    var answer = 1;
    
    while(answer*6%n!==0){
        
        if(answer*6%n==0){
            break;
        }
            
        answer++
    }
    return answer;
}