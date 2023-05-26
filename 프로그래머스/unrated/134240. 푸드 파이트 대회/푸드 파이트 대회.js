function solution(food) {
    let answer = '0';
    let strings =""
    food.forEach((item,index)=>{
        if(item>=2){
            for(let i =0;i<parseInt(item/2);i++){
                strings = index + strings 
            }
        }
    })
    answer =strings.split("").reverse().join("")+answer+strings
    return answer;
}