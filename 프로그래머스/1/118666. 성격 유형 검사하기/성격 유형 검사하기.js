function solution(survey, choices) {
    let answer = '';
    const choiceMap = {R:0,T:0,
                       C:0,F:0,
                       J:0,M:0,
                       A:0,N:0}
    for (let i = 0 ; i < survey.length; i++){
        const choice = choices[i]
        const result = Math.abs(choices[i] - 4);
        const [leftType, rightType] = survey[i].split("");
        const sur = survey[i]
            if (choices[i] < 4) {
              // 비동의 -> 왼쪽 요소
              choiceMap[leftType] += result;
            } else if (choices[i] > 4) {
              // 동의 -> 오른쪽 원소
              choiceMap[rightType] += result;
            }
        
    }
    
    console.log(choiceMap)
    const keys =Object.keys(choiceMap)
    for(let j =0 ; j<keys.length; j+=2){
        const L =choiceMap[keys[j]]
        const R =choiceMap[keys[j+1]]
        if(L>=R){
            answer+=keys[j]
        }else if(L<R){
            answer+=keys[j+1]
        }
    }
    return answer;
}