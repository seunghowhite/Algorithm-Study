import java.util.*;

class Solution {
    public int[] solution(int[] arr) {
        Stack<Integer> stk = new Stack<>();
        int i = 0;

        // arr 배열을 끝까지 순회
        while (i < arr.length) {
            if (stk.isEmpty()) {
                // 스택이 비어있으면 현재 원소 추가하고 i 증가
                stk.push(arr[i]);
                i++;
            } else if (stk.peek() < arr[i]) {
                // 스택 마지막 값보다 현재 값이 크면 추가하고 i 증가
                stk.push(arr[i]);
                i++;
            } else {
                // 스택 마지막 값이 현재 값보다 크거나 같으면 pop만 함 (i는 그대로)
                stk.pop();
            }
        }

        // Stack을 배열로 변환
        int[] result = new int[stk.size()];
        for (int j = 0; j < result.length; j++) {
            result[j] = stk.get(j); // Stack의 인덱스로 접근 가능
        }

        return result;
    }
}
