function solution(num_list) {
    function sumByIndexType(arr, isOddIndex) {
        return arr.reduce((sum, current, index) => {
            if ((isOddIndex && index % 2 !== 0) || (!isOddIndex && index % 2 === 0)) {
                return sum + current;
            }
            return sum;
        }, 0);
    }

    const oddSum = sumByIndexType(num_list, true); // 홀수 번째 요소의 합
    const evenSum = sumByIndexType(num_list, false); // 짝수 번째 요소의 합
    
    return Math.max(oddSum, evenSum);
}