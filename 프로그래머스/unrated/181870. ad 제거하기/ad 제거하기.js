function solution(strArr) {
    var answer = strArr.filter((item) => {
        return !item.includes("ad");
    });
    return answer;
}
