function solution(start_num, end_num) {
 return Array.from({length: end_num-start_num+1}, ()=> {return start_num++});
}