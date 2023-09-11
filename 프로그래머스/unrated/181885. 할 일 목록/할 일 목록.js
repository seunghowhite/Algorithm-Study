function solution(todo_list, finished) {
    let answer = [];
    finished.forEach((item,index)=>{
        if(item===false){
            answer.push(todo_list[index])
        }
    })
    return answer;
}