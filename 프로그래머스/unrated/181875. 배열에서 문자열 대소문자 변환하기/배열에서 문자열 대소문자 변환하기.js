function solution(strArr) {
    let answer = strArr.map((string,index)=>{
        if(index%2==0){
           return string.toLowerCase()
        }else{
           return string.toUpperCase()
        }
        
    })
    
    return answer;
}