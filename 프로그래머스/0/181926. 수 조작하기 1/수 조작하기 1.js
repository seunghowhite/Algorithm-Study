function solution(n, control) {
    var answer = n; // n으로 시작해야 함
    const keyMap = {
        w: +1,   // 위로 1
        s: -1,   // 아래로 1
        d: +10,  // 오른쪽으로 10
        a: -10   // 왼쪽으로 10
    };

    control.split("").forEach((str) => {
        answer += keyMap[str]; // 각각의 명령에 따라 값 변경
    });

    return answer;
}
