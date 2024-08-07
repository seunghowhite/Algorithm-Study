//2024-08-07
function solution(price, money, count) {
    let needMoney =0
    for(let i=1;i<=count;i++){
        needMoney+=price*i
    }
    const answer = needMoney-money <=0? 0:needMoney-money
    return answer;
}







//2023-03-20
// function solution(price, money, count) {
//     var answer =  0;
//     var AllPrice= 0;
    
    
//     for(var i=1;i<=count;i++){
//         AllPrice+=price*i
//     }
    
//     if(AllPrice<money){
//         return 0 ;
//     }else{
//         answer=-(money-AllPrice)
//     }
    
    
//     return answer;
// }