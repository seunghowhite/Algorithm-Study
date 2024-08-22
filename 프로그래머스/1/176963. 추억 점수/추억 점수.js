//2024-08-22
function solution(name, yearning, photo) {
   return photo.map((v)=> v.reduce((a, c)=> a += yearning[name.indexOf(c)] ?? 0, 0))
}





//2023-03-20
// function solution(name, yearning, photo) {

//      let answer = photo.map((item)=>{
//        let point=0    
//        name.forEach((yname,index)=>{
//            if(item.includes(yname)){
//                point+=yearning[index]
//            }
//        }) 
//          return point
//     })
//     return answer;
// }