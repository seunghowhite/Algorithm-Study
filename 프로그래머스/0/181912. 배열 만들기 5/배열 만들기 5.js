function solution(intStrs, k, s, l) {
    return intStrs
        .map((targetNum) => targetNum.slice(s, s + l))  // 일단 잘라내고
        .map(Number)                                    // 문자열 → 숫자 변환
        .filter((num) => num > k);                      // k보다 큰 것만 남김
}
