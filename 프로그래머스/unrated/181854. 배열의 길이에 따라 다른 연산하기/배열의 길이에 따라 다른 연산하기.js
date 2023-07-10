function solution(arr, n) {
    let answer = [];
    if(arr.length%2==0){
       arr.forEach((item,index)=>{
           if(index%2==0){
               answer.push(item)
           }else{
               answer.push(item+n)
           }
       }) 
    }else{
       arr.forEach((item,index)=>{
           if(index%2==0){
               answer.push(item+n)
           }else{
               answer.push(item)
           }
       })  
    }
    
    return answer;
}