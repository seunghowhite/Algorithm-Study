function solution(lottos, win_nums) {
    var answer = [];
    let countmynum=0
    let lessnum=0
    
    
    
    
    lottos.forEach((mynum)=>{
        if(mynum==0){countmynum++}
        win_nums.forEach((winnum)=>{
            if(mynum==winnum){lessnum++}
        })
    });
    console.log(lessnum)
    console.log(countmynum)
    let choide =lessnum+countmynum
    console.log(lessnum+countmynum)
    
    if(lessnum==6){
        answer.push(1)
    }else if(lessnum==5){
        answer.push(2)
    }else if(lessnum==4){
        answer.push(3)
    }else if(lessnum==3){
        answer.push(4)
    }else if(lessnum==2){
        answer.push(5)
    }else{
        answer.push(6)
    }
    
    if(choide==6){
        answer.push(1)
    }else if(choide==5){
        answer.push(2)
    }else if(choide==4){
        answer.push(3)
    }else if(choide==3){
        answer.push(4)
    }else if(choide==2){
        answer.push(5)
    }else{
        answer.push(6)
    }
    

    return answer.sort((a,b)=>a-b);
}