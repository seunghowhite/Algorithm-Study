function solution(a, b) {
    const hz = (x) => x % 2 === 0 ? true : false;
    let answer = 0;  // const를 let으로 변경

    if (!hz(a) && !hz(b)) {
        console.log("1")
        answer = a * a + b * b;
    } else if (
        hz(a) && hz(b)) {
        console.log("2")
        answer = Math.abs(a - b);
    } else if (hz(a) || hz(b)) {
        console.log("3")
        answer = 2 * (a + b);
        
    }

    return answer;
}
