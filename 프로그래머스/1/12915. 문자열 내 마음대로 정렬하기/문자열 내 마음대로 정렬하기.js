//2024-08-19
function solution(strings, n) {
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}







//2023-03-20
// function solution(strings, n) {
//     strings.sort(function(a,b){
//         var firststring = a[n];
//         var secondstring = b[n];
//         if(firststring===secondstring){
//              return (a > b) -(a < b);
//         }else{
//             return (firststring>secondstring)-(firststring< secondstring);
//         }
//     })
//     return strings;
// }