function solution(n) {
    
    let arrayn=String(n).split("")
    let numberArray =arrayn.map((str)=>Number(str))
    var answer = numberArray.reduce((a,c)=>a+c)
    return answer;
}