function solution(n) {
    var answer ='';
    let StringNum=0;
    StringNum=n.toString().split('').sort(function(a,b){return b-a;})
//   ["8","7","3","2","1","1"]
    StringNum.forEach((elment)=>{
        answer+=elment
    })
    return Number(answer);
}