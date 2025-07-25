function solution(l, r) {
    const answer = [];

    // l 이상 r 이하 모든 정수 반복
    for (let i = l; i <= r; i++) {
        const str = i.toString(); // 숫자를 문자열로 변환
        let isValid = true; // 조건에 맞는지 여부

        // 문자열의 각 자리수를 검사
        for (let ch of str) {
            if (ch !== '0' && ch !== '5') {
                isValid = false; // 0이나 5가 아니면 조건 불충족
                break;
            }
        }

        // 조건 만족하면 결과 배열에 추가
        if (isValid) {
            answer.push(i);
        }
    }

    // 결과가 비어있으면 [-1] 반환
    return answer.length === 0 ? [-1] : answer;
}
