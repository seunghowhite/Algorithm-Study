function solution(order) {
    var answer = 0;
    let stringorder=String(order)
    let arrayOrder =stringorder.split('')
    
    for(let i=0;i<arrayOrder.length;i++){
    if(arrayOrder[i]=='3'||arrayOrder[i]=='6'||arrayOrder[i]=='9')    {
        answer++
    }    
    }

    
    return answer;
}