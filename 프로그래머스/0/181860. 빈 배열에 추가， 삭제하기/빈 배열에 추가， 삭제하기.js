function solution(arr, flag) {
    let answer = [];
//     아무원소 빈배열 x
//     길이가같은 정수배열 arr  flag.length=arr.length
//     flag 순회
//     flag[i] 가 true?
//          x의뒤에 arr[i]를 arr[i]*2 추가
//     flase?
//         뒤에서 arr[i]개를 제거
//         
    flag.forEach((e,i)=>{
        if(e){
            for (let z = 0; z < arr[i]*2; z++) {
               answer.push(arr[i])
            }
        }else if(!e){
            for (let k = 0; k < arr[i]; k++) {
               answer.pop()
            }
        }
    })
    return answer;
}