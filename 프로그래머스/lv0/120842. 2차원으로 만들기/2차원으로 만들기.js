function solution(num_list, n) {
    var answer = [];
    let length= num_list.length
    
    for(let i=0;i<length;i+=n){
      let SpliceNumList=num_list.splice(0,n)
      answer.push(SpliceNumList)
    }
        
        
    return answer;
}