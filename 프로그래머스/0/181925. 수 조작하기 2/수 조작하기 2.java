class Solution {
    public String solution(int[] numLog) {
        String answer = "";

        // i는 0부터 numLog.length - 2까지 순회
        for (int i = 0; i < numLog.length - 1; i++) {
            int diff = numLog[i + 1] - numLog[i];

            // 차이에 따라 문자열 조작
            if (diff == 1) {
                answer += "w"; // 예: 오른쪽
            } else if (diff == -1) {
                answer += "s"; // 예: 왼쪽
            } else if (diff == 10) {
                answer += "d"; // 아래
            } else if (diff == -10) {
                answer += "a"; // 위
            }
        }

        return answer;
    }
}
