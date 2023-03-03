function solution(n) {
    var answer = [];
    let number =1
    
    while(number<=n){
        
        if(n%number==0){
            answer.push(number)
        }
        number++
        
    }
    return answer;
}