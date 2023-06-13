function solution(s) {
    var answer = '';
    const Array =s.split(" ").sort((a,b)=>a-b)
    
    answer =Array[0]+" "+Array[Array.length-1]
    
    console.log(s.split(" ").sort((a,b)=>a-b))
    return answer;
}