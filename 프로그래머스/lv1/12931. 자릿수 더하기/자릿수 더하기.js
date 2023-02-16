function solution(n)
{   let answer=0
    var a = String(n);
    let split = a.split('');   
    for(let i=0;i<split.length;i++){
        console.log('출력:',Number(split[i]))
        answer+=Number(split[i])
    }


    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}