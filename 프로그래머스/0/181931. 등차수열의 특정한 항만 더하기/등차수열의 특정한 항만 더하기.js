function solution(a, d, included) {
    return included.reduce((acc, curr, i) => {
        return curr ? acc + a + d * i : acc
    }, 0)
}