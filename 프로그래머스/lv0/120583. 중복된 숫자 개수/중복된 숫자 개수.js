function solution(array, n) {
    var answer = 0;
    
    
    array.forEach((el)=>{
        if(el==n){
            answer+=1
        }
    })
    return answer;
}