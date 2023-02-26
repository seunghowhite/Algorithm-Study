function solution(hp) {
    var answer = 0;
    let lhp=hp
    
    if(hp/5>=1){
       answer+=parseInt(hp/5)
        lhp-=parseInt(hp/5)*5
    }if(lhp/3>=1){
        answer+=parseInt(lhp/3)
        lhp-=parseInt(lhp/3)*3
    }if(lhp/1>=1){
        answer+=parseInt(lhp/1)
        lhp-=parseInt(lhp/1)*1
    }
    
    return answer;
}