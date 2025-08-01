function solution(my_string, index_list) {
    let answer = '';
    index_list.forEach((num)=>{
        answer+=my_string[num]
    })
    return answer;
}