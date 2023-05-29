function solution(nums) {
    let answer=0
    let a = nums.filter((v,index)=>nums.indexOf(v)===index);
    if(a.length>nums.length/2){
        answer =nums.length/2
    }else{
        answer =a.length
    }
    return answer;
}