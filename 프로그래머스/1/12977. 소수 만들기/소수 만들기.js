//2024-08-28
function solution(nums) {
    let answer = 0
    
    // 소수인지 확인하는 함수
    function isPrime(num) {
        if (num <= 1) return false; // 1 이하의 숫자는 소수가 아님
        if (num === 2) return true; // 2는 소수
        if (num % 2 === 0) return false; // 짝수는 소수가 아님

        // num의 제곱근까지의 홀수로 나누어 떨어지는지 확인
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    function generateCombinations(arr, start = 0, selected = [], depth = 0) {
        // 3개의 숫자가 선택된 경우
        if (depth === 3) {
            const sum = selected.reduce((acc, val) => acc + val, 0); // 선택된 숫자들의 합을 계산
            if (isPrime(sum)) {
                console.log(`소수 조합: ${selected.join(', ')} => 합: ${sum}`); // 소수인 경우 출력
                answer++; // 소수인 조합의 개수를 증가
            }
            return;
        }

        // 배열을 순회하면서 조합을 만듭니다.
        for (let i = start; i < arr.length; i++) {
            selected.push(arr[i]); // 숫자를 선택
            generateCombinations(arr, i + 1, selected, depth + 1); // 재귀 호출
            selected.pop(); // 선택을 취소하고 다음 숫자를 선택
        }
    }

    generateCombinations(nums);
    return answer;
}

//2023-03-20
// function solution(nums) {
//     let answer = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 const sum = nums[i] + nums[j] + nums[k];
//                 if (isPrime(sum)) {
//                     answer++;
//                 }
//             }
//         }
//     }
    
//     return answer;
// }

// function isPrime(num) {
//     if (num < 2) {
//         return false;
//     }
    
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
    
//     return true;
// }