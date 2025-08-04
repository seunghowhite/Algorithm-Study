function solution(number) {
    return number.split('').map(Number).reduce((a,b)=>a+b)%9
    //숫자 값의 크기는 64비트만 저장가능하다.
}