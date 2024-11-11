//2024-11-11
//! 시간복잡도 문제
// function solution(ingredient) {
//     let answer = 0;
//     const pattern = "1231";
    
//     // 문자열로 변환 후 패턴을 찾는 방식
//     let str = ingredient.join("");
    
//     // "2131" 패턴을 찾아 제거하면서 카운트
//     for
//         str = str.replace(pattern, "");
//         answer++;
    
    
//     return answer;
// }

function solution(ingredient) {
    let answer = 0;
    const stack = [];
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        if (stack.length >= 4) {
            const burger_ingredient = stack.slice(-4).join("");
            
            if (burger_ingredient === '1231') {
                stack.splice(-4);
                answer += 1;
            }
        }
    }
    
    return answer;
}