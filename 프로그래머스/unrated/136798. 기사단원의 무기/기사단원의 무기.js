function solution(number, limit, power) {
    let answer = 0;
    const yakSuCnt =(num)=>{
        let cnt = 1
        let index =1
        while(index<=num/2){
            if(num%index==0) cnt++
            index++
        }
        const editnum=cnt>limit?power:cnt
        answer+=editnum
    }
    
    for(let i =1;i<=number;i++){
        yakSuCnt(i)
    }

    return answer;
}