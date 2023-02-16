function solution(arr) {
    var answer = [];
    let indexnum=[];
    var min = Math.min.apply(null, arr);
    for(let i=0;i<arr.length;i++){
        if(arr[i]==min){
            continue
        }
        answer.push(arr[i])
    }
    if(arr.length==1){
        answer.push(-1)
    }
    return answer;
}