function solution(my_string, index_list) {
    let answer = '';
    const arrystring =my_string.split("");
    for(const charnum in index_list){
      answer+=arrystring[index_list[charnum]]  
    }
    return answer;
}