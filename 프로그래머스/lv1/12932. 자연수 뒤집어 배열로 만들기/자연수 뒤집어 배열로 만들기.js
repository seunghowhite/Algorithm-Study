function solution(n) {
    var answer = [];
    let strit=[]
    let StringN =String(n)
    let SplitN =StringN.split('')
    // console.log('출력:',SplitN)
//     이제 문자를 숫자로 변환해서 배열에 넣어야함.
    for(let i=0;i<SplitN.length;i++){
        strit.push(Number(SplitN[i]))
    }
    answer=strit.reverse();
    return answer;
}