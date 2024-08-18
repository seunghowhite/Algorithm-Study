//2024-08-18
function solution(s) {
    let answer = s;
    const numStringArray =["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    numStringArray.forEach((str,index)=>{
       answer = answer.replaceAll(str,index)
    })
    return Number(answer);
}













//2023-03-20
// function solution(s) {
//     var answer = s;
//     let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     for(let i=0; i<numbers.length;i++){
//         let arr = answer.split(numbers[i])
//         console.log('------------------------------')
//         console.log(arr)
//         answer = arr.join(i);
//         console.log(answer)
//         console.log('------------------------------')
//     }

//     return Number(answer);
// }