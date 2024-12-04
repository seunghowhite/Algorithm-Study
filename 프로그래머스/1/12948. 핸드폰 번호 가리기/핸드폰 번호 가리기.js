//2024-08-03
function solution(phone_number) {
    // const phone_number_length =phone_number.length
    // return "*".repeat(phone_number_length-4)+phone_number.slice(-4,phone_number_length);
     return phone_number.replace(/\d(?=\d{4})/g, "*");
}
















//2023-03-20
// function solution(phone_number) {
//     var answer = '';
//     var numString ="0"
//     var star =""
//     var p_length=phone_number.length
// //     끝자리 4가지를 가지고 온다.
// //     나머지는 총열의 -4를 하고 *을 갯수만큽 붙인다.
//     numString= phone_number.slice(-4,p_length+1)
//     star="*".repeat(p_length-4); 
//     return star+numString;
// }