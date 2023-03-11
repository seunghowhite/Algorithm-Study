function solution(array, n) {
    const abs =(absnum)=> Math.abs(absnum)
    var answer = array.sort().map((item)=> abs(item-n));
    let minasnwerindex =answer.indexOf(Math.min(...answer))
    
    return array[minasnwerindex];
}