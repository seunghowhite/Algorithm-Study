function solution(phone_number) {
    var answer = '';
    var numString ="0"
    var star =""
    var p_length=phone_number.length
//     끝자리 4가지를 가지고 온다.
//     나머지는 총열의 -4를 하고 *을 갯수만큽 붙인다.
    numString= phone_number.slice(-4,p_length+1)
    star="*".repeat(p_length-4); 
    return star+numString;
}