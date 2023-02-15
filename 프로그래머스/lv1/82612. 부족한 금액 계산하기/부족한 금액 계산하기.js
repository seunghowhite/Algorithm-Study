function solution(price, money, count) {
    var answer =  0;
    var AllPrice= 0;
    
    
    for(var i=1;i<=count;i++){
        AllPrice+=price*i
    }
    
    if(AllPrice<money){
        return 0 ;
    }else{
        answer=-(money-AllPrice)
    }
    
    
    return answer;
}