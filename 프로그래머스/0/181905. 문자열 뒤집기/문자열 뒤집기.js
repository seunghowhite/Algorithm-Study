function solution(my_string, s, e) {
    let arr = my_string.split(""); // 문자열 → 문자 배열
    const reversedArr = arr.slice(s, e + 1).reverse(); // s~e 구간 잘라서 뒤집기
    arr.splice(s, e - s + 1, ...reversedArr); // 배열 요소를 펼쳐서 교체
    return arr.join(""); // 다시 문자열로 변환
}
