function solution(sides) {
    var answer = 0;
    let sort =sides.sort((a,b)=>a-b)
    if(sort[2]<sort[0]+sort[1]){
        answer=1
    }else{
        answer=2
    }
    return answer;
}