//2024년 7월 22일
function solution(a, b) {
    let s =0
     for (var i = Math.min(a, b); i <= Math.max(a, b); i++) {
         s += i;
     }
    return s;
}