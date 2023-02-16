function solution(n) {
    var answer = 0;
    let subnum =0
    console.log(Math.sqrt(n))
     // Math.pow(값, 제곱승)
    if(Number.isInteger(Math.sqrt(n))){
        subnum=Math.sqrt(n)+1
        answer=Math.pow(subnum,2)
    }else{
        answer =-1
    }
    return answer;
}