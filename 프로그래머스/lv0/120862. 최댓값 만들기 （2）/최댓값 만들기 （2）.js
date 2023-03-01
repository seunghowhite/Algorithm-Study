function solution(numbers) {
    const allofnumber = []
    // 모든 경우의 수를 구함
    for(let i = 0 ; i < numbers.length; i ++) {
        for(let j = 0 ; j < numbers.length; j++) {
            if(i !== j) {
                allofnumber.push(numbers[i] * numbers[j])    
            }
        }
    }
    
    //최댓값 출력
    return Math.max(...allofnumber)
}