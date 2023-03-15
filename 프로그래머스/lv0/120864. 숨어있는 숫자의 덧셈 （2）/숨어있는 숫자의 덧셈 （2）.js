function solution(my_string) {
    var answer = [];
    const stringresult = my_string.replace( /[^0-9]/g, " ").split(' ');
    stringresult.forEach((item)=>{if(parseInt(item))answer.push(parseInt(item))})
    if(answer==false)return 0;
    return answer.reduce((acc,current)=>acc+current);
}