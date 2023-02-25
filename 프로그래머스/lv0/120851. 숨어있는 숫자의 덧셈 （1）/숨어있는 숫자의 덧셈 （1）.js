function solution(my_string) {
    var answer = 0;
    let array =my_string.split('')
    array.forEach((num)=>{
        if(Number(num)){
            answer+=Number(num)
        }
    })
    return answer;
}