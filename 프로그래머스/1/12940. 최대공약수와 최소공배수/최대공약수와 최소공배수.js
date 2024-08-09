//2024-08-09
function solution(n, m) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    const gcdValue = gcd(n, m);
    const lcm = (n * m) / gcdValue;
    // 최소공배수는 두 수의 곱을 최대공약수로 나눈 값

    return [gcdValue, lcm];
 
}








//2023-03-20
// function solution(n, m) {
//     let gcd = 1;
//       for(let i=2; i <= n; i++){
//       if(n % i === 0 &&  m % i === 0) gcd = i;
//     }
//     return [gcd,n*m/gcd] ;
// }