function solution(a, b) {
    const ab = Number(a.toString().concat(b.toString()))
    const ab2 = 2*a*b
    return ab>ab2?ab:ab2;
}