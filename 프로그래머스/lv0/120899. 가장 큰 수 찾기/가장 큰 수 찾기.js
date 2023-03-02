function solution(array) {
    var answer = Math.max(...array);
    let index= array.findIndex(x=>x==answer)
    return [answer,index];
}