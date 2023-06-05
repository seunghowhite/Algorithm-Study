function solution(dartResult) {
  var answer = 0;
  let Num = [];
  let NumStore = 0;
  for (let i = 0; i < dartResult.length; i++) {
    if(dartResult[i]>=0&&dartResult[i] <= 9 ){
        if(dartResult[i]==1&&dartResult[i+1]==0){
            NumStore=10
            i++;
        }else{
            NumStore=dartResult[i]
        }
    
    } else if(dartResult[i] === "S") { 
            Num.push(Number(NumStore));

    } else if (dartResult[i] === "D") {  
            Num.push(Math.pow(NumStore,2));

    } else if (dartResult[i] === "T") { 
            Num.push(Math.pow(NumStore,3));
     
    } else if (dartResult[i] === "#") {
            Num[Num.length-1] *= -1;
  
    } else if (dartResult[i] === "*") { 
            Num[Num.length-1] *= 2;
            Num[Num.length-2] *= 2;
       
    }
  }
  answer =Num.reduce((acc,curr)=>acc+curr,0)
  return answer;
}
