function solution(rny_string) {
    let answer =rny_string.split("").map((item)=>{
        
        return item =="m"?"rn":item
        
    })
    
    return answer.join("")
}