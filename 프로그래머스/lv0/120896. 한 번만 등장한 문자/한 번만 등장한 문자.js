function solution(s) {
    var answer = [];
    let Sarray=s.split('').sort()
        Sarray.forEach((item,index)=>{
        if((item!==Sarray[index-1])&&(item!==Sarray[index+1])){
          answer.push(item)
        }
    })
    return answer.join('');
}