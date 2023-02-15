function solution(arr, divisor) {
    var answer =[];
    var sum=[]
//     arr각각 값이<for> div로 나누어 떨어질때
//   그 값을 반환 한다.
    for(let i=0;i<arr.length;i++){
        if(arr[i]%divisor==0 || divisor==1){
            sum.push(arr[i]);
        }
    }
    if(sum.length==0){
        sum.push(-1);
    }
    
//     이제 배열을 오름 차순 정렬
    sum.sort(function(a,b){
        if (a > b) return 1
        else if (b > a) return -1;
        else return 0;
    })
    return sum;
}