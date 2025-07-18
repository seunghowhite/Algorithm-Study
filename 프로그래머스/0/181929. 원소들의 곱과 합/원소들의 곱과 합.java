class Solution {
    public int solution(int[] num_list) {
        int sum = 0;
        int gob = 1; // 곱셈이므로 1부터 시작

        for (int i = 0; i < num_list.length; i++) {
            sum += num_list[i];      // 모든 요소 더하기
            gob *= num_list[i];      // 모든 요소 곱하기
        }

        // 합의 제곱이 곱보다 크면 1, 아니면 0
        return (sum * sum > gob) ? 1 : 0;
    }
}
