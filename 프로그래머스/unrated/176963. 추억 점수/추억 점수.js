function solution(name, yearning, photo) {

     let answer = photo.map((item)=>{
       let point=0    
       name.forEach((yname,index)=>{
           if(item.includes(yname)){
               point+=yearning[index]
           }
       }) 
         return point
    })
    return answer;
}