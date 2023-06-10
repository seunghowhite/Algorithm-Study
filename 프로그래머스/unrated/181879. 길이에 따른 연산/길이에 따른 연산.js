function solution(num_list) {
    
    let answer =0
    if(num_list.length>=11){
        answer=num_list.reduce((acc,pre)=>acc+pre,0)
    }else {
        answer=num_list.reduce((acc,pre)=>acc*pre)
    }
    
    return answer ;
}