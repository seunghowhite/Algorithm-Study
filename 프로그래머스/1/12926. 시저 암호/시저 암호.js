//2024-08-15
function solution(s, n) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let answer= '';

    for(let i =0; i <s.length; i++){
        let text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        let textArr = upper.includes(text) ? upper : lower;
        let index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}












//2023-03-20
// function solution(s, n) {
//     let answer = '';
//     for (let i = 0; i < s.length; i++) { 
//       let sASCII = s.charCodeAt(i)

//       if (sASCII >= 65 && sASCII <= 90) {
//         sASCII += n;
//         if (sASCII > 90) {
//           sASCII -= 26;

//         }
//       }
//       else if (sASCII >= 97 && sASCII <= 122) {
//         sASCII += n;
//         if (sASCII > 122) {
//           sASCII -= 26;

//         }
//       }
//       sString = String.fromCharCode(sASCII);

//       answer += sString;

//     }
//     return answer;
//   }