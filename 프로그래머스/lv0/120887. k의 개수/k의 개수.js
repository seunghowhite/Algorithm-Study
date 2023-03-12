function solution(i, j, k) {
    var answer = 0;

    for(i; i<=j; i++){
    let arrayi=i.toString().split('')
    let count =arrayi.filter(item=>item==k.toString()).length
    answer=answer+count
    } 

    return answer;
}