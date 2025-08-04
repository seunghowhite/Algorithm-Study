class Solution {
    public int solution(String number) {
        int answer = 0;

        for (int i = 0; i < number.length(); i++) {
            // 현재 문자를 숫자로 변환 (예: '3' -> 3)
            int digit = Character.getNumericValue(number.charAt(i));

            // 변환된 숫자를 누적
            answer += digit;
        }

        // 모든 자리수를 더한 결과 반환
        return answer%9;
    }
}
