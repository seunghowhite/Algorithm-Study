function solution(d, budget) {
    let answer = 0;
    const sortArry = d.sort((a,b)=>a-b)
    let de =budget
    for( let i=0; i<sortArry.length;i++){
        if(sortArry[i]<=de){
            answer+=1
            de-=sortArry[i]
        } 
    }
    return answer;
}