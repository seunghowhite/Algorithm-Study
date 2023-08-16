function solution(arr1, arr2) {
    let answer = 0;
    
    if(arr1.length<arr2.length){
        answer =-1
    }else if(arr1.length>arr2.length){
        answer=1
    }else if(arr1.length===arr2.length){
        const arr1Accumulator =arr1.reduce((item,curr)=>item+curr,0)
        const arr2Accumulator =arr2.reduce((item,curr)=>item+curr,0)
        answer = arr1Accumulator>arr2Accumulator?1:arr1Accumulator<arr2Accumulator?-1:0
        
        
    }
    return answer;
}