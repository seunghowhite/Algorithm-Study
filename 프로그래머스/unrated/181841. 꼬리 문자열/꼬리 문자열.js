function solution(str_list, ex) {
    let answer = [];
    str_list.forEach((string)=>{
        if(!(string.includes(ex))){
            answer.push(string)
        }
    })
    return answer.join("");
}