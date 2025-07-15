function solution(a, b) {
    const strA = a.toString();
    const strB = b.toString();
    const ab = strA.concat(strB);
    const ba = strB.concat(strA);
    return Number(ab) >= Number(ba) ? Number(ab) : Number(ba);
}