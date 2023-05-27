function solution(s) {
  let strArr = [];
  let answer =[]
    s.split("").forEach((string, index) => {
    if(!strArr.includes(s.split("")[index])){
        answer.push(-1)
    }else if(strArr.includes(s.split("")[index])){
        answer.push(index - strArr.lastIndexOf(s.split("")[index]));
    } 
   strArr.push(string)
  });
  
  return answer;
}