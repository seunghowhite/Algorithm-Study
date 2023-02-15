function solution(s){
    let str= s.toLowerCase();
//     대소문자 상관ㅇ 없어짐 다 소문자로 변신
    let count = 0
    for(let i = 0; i <s.length; i++){
        if(str[i]==="p") count++;
        else if(str[i]=== "y") count--
    }
    return count === 0 ? true : false
}