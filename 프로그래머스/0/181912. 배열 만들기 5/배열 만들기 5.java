import java.util.ArrayList;

class Solution {
    public int[] solution(String[] intStrs, int k, int s, int l) {
        ArrayList<Integer> list = new ArrayList<>();

        for (String str : intStrs) {
            // 부분 문자열 잘라내기
            String sliced = str.substring(s, s + l);

            // 문자열 → 정수로 변환
            int num = Integer.parseInt(sliced);

            // k보다 큰 값만 추가
            if (num > k) {
                list.add(num);
            }
        }

        // ArrayList → int[] 변환
        int[] answer = new int[list.size()];
        for (int i = 0; i < list.size(); i++) {
            answer[i] = list.get(i);
        }

        return answer;
    }
}
