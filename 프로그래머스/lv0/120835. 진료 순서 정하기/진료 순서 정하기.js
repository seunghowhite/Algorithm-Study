function solution(emergency) {
    let eme=emergency.slice().sort((a,b)=>b-a);
    console.log('emergency.sort',eme)
    console.log('emergency:',emergency) 
    let answer = emergency.map((item)=>eme.indexOf(item)+1);
    
    return answer;
}