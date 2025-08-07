function solution(my_strings, parts) {
    let answer = '';
    my_strings.forEach((string,i)=>{
        const [start,end] = parts[i]
        answer+=string.substring(start,end+1)
    })
    return answer;
}