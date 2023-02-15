function solution(arr) {
    var answer = 0;
    var sum =0;
//     어레이의 값을 다 더해서  어래이 갯수로 나누기
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    answer =sum/arr.length
    return answer;
}