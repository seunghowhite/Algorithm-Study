function solution(s) {
    let answer =0;
    let fristStr =""
    let outherStr =""
    for(let i=0; i<s.length;i++ ){

        if(fristStr==""){
            fristStr = s[i]
            continue
        }
        if (s[i]===fristStr[0]){
           fristStr=fristStr+s[i]
        }else if (s[i]!==fristStr[0]) {
           outherStr+=s[i]
        if(fristStr.length ===outherStr.length){
            fristStr =""
            outherStr=""
            answer++
     
        }
            // if(fristStr.length>0&&outherStr=="")
            // answer++
        }

        
    }
    
    return answer;
}


//
// function solution(s) {
//     let stack = [];
//     let count = 0;
    
//     for(let i = 0; i < s.length; i += 1){
//         stack.push(s[i]);
        
//         const same = stack.filter((item) => item === stack[0]);
//         const notSame = stack.filter((item) => item !== stack[0]);
        
//         if(same.length === notSame.length){
//             count += 1;
//             stack = [];
//         }
//     }
    
//     if(stack.length !== 0){
//         count += 1;
//     }
    
//     return count;
// }