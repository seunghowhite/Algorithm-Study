function solution(babbling) {
    const can = ['aya','ye','woo','ma'];
    let count = 0;
    
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i];
        
        for(let j = 0; j < can.length; j++){
            if(babble.includes(can[j].repeat(2))){
                break;
            }
            
            babble = babble.split(can[j]).join(" ");
        
        }
          console.log(babble)
        if(babble.trim().length === 0){
            count += 1;
        }
    }
    
    return count;
}