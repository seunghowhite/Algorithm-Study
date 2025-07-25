import java.util.*;

class Solution {
    public int[] solution(int l, int r) {
        List<Integer> temp = new ArrayList<>();

        // l부터 r까지 반복
        for (int i = l; i <= r; i++) {
            if (isOnlyZeroAndFive(i)) {
                temp.add(i); // 조건 만족 시 리스트에 추가
            }
        }

        // 조건 만족하는 숫자가 없다면 -1 반환
        if (temp.isEmpty()) {
            return new int[]{-1};
        }

        // 리스트를 배열로 변환
        int[] answer = new int[temp.size()];
        for (int i = 0; i < temp.size(); i++) {
            answer[i] = temp.get(i);
        }

        return answer;
    }

    // 숫자가 0과 5로만 이루어져 있는지 검사하는 메서드
    private boolean isOnlyZeroAndFive(int num) {
        String str = String.valueOf(num); // 숫자를 문자열로 변환
        for (char ch : str.toCharArray()) {
            if (ch != '0' && ch != '5') {
                return false; // 0과 5 이외의 숫자가 포함되면 false
            }
        }
        return true;
    }
}
