function solution(left, right) {
    var answer = 0;
    
    for(let i=left ;i<=right; i++ ){    
        let count = 0;
        for(let j =0; j<=i; j++){
            // console.log("아이",i)
            // console.log("제이",j)
            if(i%j===0){
            console.log("아이",i)
            console.log("제이",j)
                count+=1
                console.log(count)
            }
        
        }
                    if(count%2==0){
                answer+=i
            }else{
                answer-=i
            }
    }
    
    return answer;
}