function solution(n) {
    var answer = '';
    if(n%2==0){
        for(let i=0;i<n/2;i++){
            answer+='수박'
        }
    }else if(!(n%2==0)){
        answer='수'
        for(let i=0;i<n/2-0.5;i++){
            answer+='박수'
        }
    }else{
        answer='수'
    }
    return answer;
}