function solution(rsp) {
    return rsp.split('').map((a)=>{
        if(a==2){return 0}
        if(a==0){return 5}
        if(a==5){return 2}
    }).join('');
}