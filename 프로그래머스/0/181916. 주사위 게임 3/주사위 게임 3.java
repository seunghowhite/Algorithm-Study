class Solution {
    public int solution(int a, int b, int c, int d) {
        int answer = 0;

        // 1. 네 주사위 숫자가 모두 같은 경우
        if (a == b && a == c && a == d) return 1111 * a;

        // 2. 세 숫자가 같고 하나만 다른 경우
        if (a == b && a == c) return (int) Math.pow(10 * a + d, 2);
        if (a == b && a == d) return (int) Math.pow(10 * a + c, 2);
        if (a == c && a == d) return (int) Math.pow(10 * a + b, 2);
        if (b == c && b == d) return (int) Math.pow(10 * b + a, 2);

        // 3. 두 쌍이 같은 경우 (2개 + 2개)
        if (a == b && c == d) return (a + c) * Math.abs(a - c);
        if (a == c && b == d) return (a + b) * Math.abs(a - b);
        if (a == d && b == c) return (a + b) * Math.abs(a - b);

        // 4. 두 개만 같은 경우 (2 + 1 + 1)
        if (a == b) return c * d;
        if (a == c) return b * d;
        if (a == d) return b * c;
        if (b == c) return a * d;
        if (b == d) return a * c;
        if (c == d) return a * b;

        // 5. 전부 다 다른 경우
        return Math.min(Math.min(a, b), Math.min(c, d));
    }
}
