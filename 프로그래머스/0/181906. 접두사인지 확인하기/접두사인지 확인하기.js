function solution(my_string, is_prefix) {
    let list = []
    my_string.split("").forEach((string,index)=>{
        list.push(my_string.substring(0,index+1))
    })
    return list.some((string)=>string===is_prefix)?1:0;
}