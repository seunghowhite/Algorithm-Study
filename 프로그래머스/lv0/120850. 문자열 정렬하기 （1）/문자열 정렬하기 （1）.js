function solution(my_string) {
    var answer = [];
    my_string.split('').forEach((e)=>{
        if(e>=0){
            answer.push(Number(e))
        }
    })
    return answer.sort((a,b)=>a-b);
}