//2024년 7월 16일
function solution(s){

  const result = s.toLowerCase().split("").reduce((acc, cur) => {

    if (cur === 'p') {
      return acc + 1;
    }

    else if (cur === 'y') {
      return acc - 1;
    }
    else{
      return acc;
    }
  }, 0); 
  return result === 0;
}









//2023년 11월 29일
// function solution(s){
//     s = s.toUpperCase();
//    return s.split("P").length === s.split("Y").length;

// }





//그전코드
// function solution(s){
//     let str= s.toLowerCase();
// //     대소문자 상관ㅇ 없어짐 다 소문자로 변신
//     let count = 0
//     for(let i = 0; i <s.length; i++){
//         if(str[i]==="p") count++;
//         else if(str[i]=== "y") count--
//     }
//     return count === 0 ? true : false
// }