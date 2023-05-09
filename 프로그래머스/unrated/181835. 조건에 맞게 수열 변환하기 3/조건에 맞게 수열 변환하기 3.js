function solution(arr, k) {
    let answer;
    if(k%2==0){
        answer=arr.map((item)=>{
            return item+k
        })
    }else if (k%2!==0){
        answer=arr.map((item)=>{
            return item*k
        })
    }
    return answer;
}