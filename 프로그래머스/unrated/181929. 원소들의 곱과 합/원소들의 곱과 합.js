function solution(num_list) {
    var answer = 0;
    const double = num_list.reduce((acc,cur)=>acc*cur)
    const square = Math.pow(num_list.reduce((acc,cur)=>acc+cur),2)
    return double<square?1:0;
}