function solution(my_string) {
    var answer = my_string.split('').filter((item,index)=>(
        my_string.indexOf(item)===index)).join('')
 
    return answer;
}