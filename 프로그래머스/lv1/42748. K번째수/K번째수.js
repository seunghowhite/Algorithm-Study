function solution(array, commands) {
    let answer = [];
    commands.forEach((item)=>{
        const sliceArry =array.slice(item[0]-1,item[1]).sort((a,b)=>a-b)
        answer.push(sliceArry[item[2]-1])
    })
    return answer;
}